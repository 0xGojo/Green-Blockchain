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
    mapping (address => uint256) balanceOf;
    mapping (uint => Warrior) warriors;
    mapping (uint => Issue) issues;
    mapping (uint => Location) locations; 
    address payable owner;
    int private id;
    
    struct Warrior{
        uint8 rating;
        uint amountRecieved;
        uint amountDonated;
        // two latest properties above will affect warrior's rating
        uint[] issues;
        // 0 : null
        // 1 : active
        // 2 : deactive
        // 3 : removed
        uint state;
    }
    
    struct Issue {
        address issueOwner; 
        string[] images; // IPFS links
        uint amount;
    }
    
    struct Location {
        uint id;
        uint rating;
    }
    
    /**
     * Event FIELD
     **/
    event Register(uint id, uint256 amountDeposit);
    
    
    /**
     * Constructor FIELD
     **/
    constructor() public payable {
        // the king of empiror
        owner = msg.sender;
    }
    
    /**
     * Function FIELD
     **/
    function registerToNetwork(uint _userId) payable external {
        if(msg.value != 0){
            balanceOf[msg.sender] = msg.value;
        }
        uint[] memory init;
        warriors[_userId] = Warrior(_userId, 0, 0, 0, init);
        
        emit Register(_userId, msg.value);
    }
    
    // Report user cheating
    // function reportUser() {
    //  if user cheats at first time their rating will be devided by 2 , second will be zero and third time will be removed 
    //  
    // }
    
    // penalty user. For cheating or lying user we will fine them and remove immadiately 
    function penaltyUser(uint _userId) {
        
    }

    // Create new issue, can add coin to incentive people make the progress faster
    function createNewIssue(string[] _images, ) {
        
    }

    // Do the clean work
    function cleanIssue() {
        
    }
    
    // this function will help 
    function ratingRestaurantsOrStores() {
        
    } 
    
    // close issue
    function closeIssue() {
        
    }
    
    // fund to group or oganisation who helping save the world
    function fundCoin() { 
        
    }
    
    // withdraw coin 
    function withdraw(address _address) {
        
    }
}