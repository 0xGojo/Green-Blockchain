pragma solidity 0.5.11;

/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */
library SafeMath {

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */
  function mul(uint256 _a, uint256 _b) internal pure returns (uint256 c) {
    // Gas optimization: this is cheaper than asserting 'a' not being zero, but the
    // benefit is lost if 'b' is also tested.
    // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
    if (_a == 0) {
      return 0;
    }

    c = _a * _b;
    assert(c / _a == _b);
    return c;
  }

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */
  function div(uint256 _a, uint256 _b) internal pure returns (uint256) {
    // assert(_b > 0); Solidity automatically throws when dividing by 0
    uint256 c = _a / _b;
    assert(_a == _b * c + _a % _b); // There is no case in which this doesn't hold
    return _a / _b;
  }

  /**
  * @dev Integer division of two numbers, rounding up and truncating the quotient
  */
  function divCeil(uint256 _a, uint256 _b) internal pure returns (uint256) {
    if (_a == 0) {
      return 0;
    }

    return ((_a - 1) / _b) + 1;
  }

  /**
  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 _a, uint256 _b) internal pure returns (uint256) {
    assert(_b <= _a);
    return _a - _b;
  }

  /**
  * @dev Adds two numbers, throws on overflow.
  */
  function add(uint256 _a, uint256 _b) internal pure returns (uint256 c) {
    c = _a + _b;
    assert(c >= _a);
    return c;
  } 
}

contract GreenBlockchainLogic {
    using SafeMath for uint;
    
    /**
     * Propertie FIELD
     **/
    mapping (address => uint256) public balances;
    // issue id must diff to 0
    mapping (uint => Issue) public issues;
    mapping (uint => Location) public locations; 
    address owner;
    
    enum issueState {
        ready,
        open,
        active,
        close,
        done
    }
    
    struct Issue {
        address issueOwner; 
        uint amount;
        bool assignToAdmin;
        issueState state;
    }
    
    struct Location {
        uint8 rating;
        uint16 totalRate;
        uint32 longtitude;
        uint32 latitude;
        bool active;
    }
    
    /**
     * modifier FIELD
     **/
    modifier ownerOnly(){
        require(owner == msg.sender);
        _;
    }
    
    /**
     * Event FIELD
     **/
    event Rating(uint indexed id, uint32 longtitude, uint32 latitude, uint8 _rate);
    event OpenWork(uint indexed id, uint256 bountyAmount, bool assignToAdmin);
    event CloseWork(uint id);
    event WorkDone(uint id, address reciever, uint8 rating);
    event FundingCoin(address reciever, uint256 amount);
    event Donation(address reciever, uint256 amount, uint id);
    event Withdraw(address reciever, uint256 amount);
    
    /**
     * Constructor FIELD
     **/
    constructor() public payable {
    }
    
    /**
     * Function FIELD
     **/
    
    // Report user cheating
    // function reportUser() {
    //  if user cheats at first time their rating will be devided by 2 , second will be zero and third time will be removed 
    // }
    
    // penalty user. For cheating or lying user we will fine them and remove immadiately 
    // function penaltyUser(uint _userId) {}

    // TODO: the feature assign to admin not enabled yet
    // Open work to clean
    function openWork (uint _id, uint256 _amount, bool _assignToAdmin) payable external {
        require(issues[_id].state == issueState.ready, "Wrong issue id !!!");
        require(balances[msg.sender].add(msg.value) >= _amount, "Your balance is insufficient !!");
        balances[msg.sender] = balances[msg.sender].add(msg.value).sub(_amount); 
        
        issues[_id] = Issue({
            issueOwner : msg.sender,
            amount : _amount,
            state : issueState.active,
            assignToAdmin : _assignToAdmin
        });
        
        emit OpenWork(_id, _amount, _assignToAdmin);
    }
    
    function closeWork (uint _id) external {
        require(issues[_id].issueOwner == msg.sender, "You should be owner of this issue to make this action !!");
        require(issues[_id].state == issueState.open, "Wrong issue's state !!!");
        issues[_id].state = issueState.close;
        balances[msg.sender] = balances[msg.sender].add(issues[_id].amount);
        
        emit CloseWork(_id);
    }
    
    // TODO: the feature assign to admin not enabled yet
    function workDone (uint _id, address _receiver, uint8 _rating) external {
        require(issues[_id].issueOwner == msg.sender , "You should be owner of this issue to make this action !!");
        require(issues[_id].state == issueState.open, "Wrong issue's state !!!");
        
        issues[_id].state = issueState.done;
        balances[_receiver] = balances[_receiver].add(issues[_id].amount);
        
        emit WorkDone(_id, _receiver, _rating);
    }
    
    // this function will help 
    function ratingFriendlyPlaces (uint id, uint32 _longitude, uint32 _latitude, uint8 _rate) external {
        require(_rate < 51, "the rating number must be less or equal than 50");
        
        if(locations[id].active) {
            locations[id].rating += _rate;
            locations[id].totalRate += 1;
        } else {
            locations[id] = Location({
                rating : _rate,
                longtitude : _longitude,
                latitude : _latitude,
                totalRate : 1,
                active : true
            });   
        }
        
        emit Rating(id, _longitude, _latitude, _rate);
    } 
    
    // fund to group or organisation who helping save the world
    function fundingCoin (address payable _receiver, uint256 _amount) external ownerOnly {
        require(address(this).balance >= _amount);
        _receiver.transfer(_amount);
        
        emit FundingCoin(_receiver, _amount);
    }
    
    function donate (address _address, uint _issueId, uint256 _amount) external payable {
        require(((_address == address(0x0) ? 0x01 : 0x00) ^ (_issueId == 0 ? 0x01 : 0x00)) != 0x01);
        require(balances[msg.sender].add(msg.value) >= _amount, "Your balance is insufficient !!");
        
        balances[msg.sender] = balances[msg.sender].add(msg.value).sub(_amount); 
        if(_address != address(0x0)) {
            balances[_address] = balances[_address].add(_amount);
        } else {
            issues[_issueId].amount.add(_amount);
        }
        
        // based on number of Donation your rating will be up
        emit Donation(_address, msg.value, _issueId);
    
    }
    
    // withdraw coin 
    function withdraw(address payable _address, uint256 _amount) external {
        require(balances[_address] >= _amount);
        balances[_address].sub(_amount);
        _address.transfer(_amount);
        
        emit Withdraw(_address, _amount);
    }
}