
import React from 'react';
import 'antd/dist/antd.css';
import './uploadForm.css';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { Upload, Button, Icon, Form, Input, Modal } from 'antd';
import { urlServer, getBase64, formDataConfig } from '../../../../core/utils/commonUtils'

const { TextArea } = Input;


class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subTitle: '',
            video: null,
            urlBanner: '',
            deleteLogos: [],
            fileList: [],
            fileVideos: [],
            isBannerDisplay: true,
            previewVisible: false,
            previewImage: ''
        }
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
  
      this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
      });
    };
  
    handleChange = ({ fileList }) => {
        this.setState({ fileList })
    };

    handleChangeVideoUpload = info => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1);
        const videoWrapper = document.getElementsByClassName('video-wrapper')[0];
        const uploadList = document.getElementsByClassName('ant-upload-list')[0];
        const videoBanner = document.getElementsByClassName('video-banner')[0];
        if (fileList[0].status !== 'done') {
            this.setState({
                fileVideos: fileList,
                isBannerDisplay: false
            })
            videoWrapper.style.display = 'none';
            uploadList.style.display = 'block';
        } else {
            videoWrapper.style.display = 'block';
            videoWrapper.style.marginBottom = '10px';
            uploadList.style.display = 'none';
            this.blobURL = URL.createObjectURL(fileList[0].originFileObj);
            videoBanner.src = this.blobURL;
            this.setState({
                video: info.file.originFileObj
            })
        }
    }

    filterImages = (images) => {
        const filterImages = images.filter(item => item.size > 0);
        return filterImages.map(item => item.originFileObj);
    }

    filterNameLogos = (logos) => {
        return logos.map(item => item.split('/')[2]);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            const filterImages = this.filterImages(this.state.fileList);
            let deleteLogos = this.filterNameLogos(this.state.deleteLogos);
            deleteLogos.push('deleteLogos');
            const formData = {
                title: values.title,
                subTitle: values.subTitle,
                video: this.state.video,
                deleteLogos,
                logos: filterImages
            }
            this.props.onUpdateBanner(formDataConfig(formData));      
        }
        });
        URL.revokeObjectURL(this.blobURL);
    };

    onRemove = file => {
        const { deleteLogos } = this.state;
        if (file.name) {
            deleteLogos.push(file.name)
            this.setState({
                deleteLogos
            })
        }
      }

    // eslint-disable-next-line react/no-deprecated
    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            const images = nextProps.data.urlLogo.map((item, index) => {
                return {
                  uid: index,
                  name: item,
                  status: 'done',
                  url: urlServer(item),
                }
            })
            const urlBanner = urlServer(nextProps.data.urlBanner);
            const { title, subTitle } = nextProps.data;
            this.setState({ 
                fileList: images,
                urlBanner,
                title,
                subTitle
            });
        }
    }

    render() {
        const fileVideos = [];
        const propsVideo = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            listType: 'picture',
            defaultFileList: [...fileVideos],
            className: 'upload-list-inline',
            onChange: this.handleChangeVideoUpload
        };
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="admin-hompage-form" onSubmit={this.handleSubmit}>
            <div className="content-header">
                <h1 className="heading">Homepage</h1>
                <div>
                    <Button className="btn-second-0">Discard</Button>
                    <Button htmlType="submit" className="btn-primary-0 ml-4">Save</Button>
                </div>

            </div>
            <Jumbotron className="mgt-40">
                <h2 className="sub-heading">Hero section</h2>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div className="divider"></div>
                <Container>
                    <Row>
                        <Col className="video-upload-container" xs={6}>
                            <h3 className="video-heading">Video background</h3>
                            
                            <div className="video-wrapper">
                                {this.state.isBannerDisplay && (
                                    <video className="initial-banner" src={this.state.urlBanner} alt="video background" />
                                )}
                                <video className="video-banner" alt="video background" />
                            </div>

                            <Upload {...propsVideo} fileList={this.state.fileVideos}>
                                <Button className="btn-primary-0">
                                    Upload video
                                </Button>
                                <p className="description">
                                Change your video background
                                </p>
                            </Upload>
                            
                        </Col>
                        <Col xs={6}>
                            <h3 className="video-heading">Title</h3>
                            <Form.Item>
                                {getFieldDecorator('title', {
                                    rules: [{ required: true, message: 'Please input your title!' }],
                                    initialValue: this.state.title
                                })(
                                    <TextArea rows={4} />,
                                )}
                            </Form.Item>
                            <h3 className="video-heading">Subtitle</h3>
                            <Form.Item>
                                {getFieldDecorator('subTitle', {
                                    rules: [{ required: true, message: 'Please input your subtitle!' }],
                                    initialValue: this.state.subTitle
                                })(
                                    <TextArea rows={4} />,
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Jumbotron className="mgt-40">
                <h2 className="sub-heading">Trusted by - Clients logo</h2>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div className="divider"></div>
                <Container>
                <div className="clearfix">
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        onRemove={this.onRemove}
                    >
                        {fileList.length >= 12 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
                </Container>
            </Jumbotron>
        </Form>
        );
    }
}

const WrappedUploadForm = Form.create({ name: 'normal_upload' })(UploadForm);

export default WrappedUploadForm;
