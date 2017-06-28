import './OriginResultManage.css';
import {STYLE, SESSION, SERVER, FILE_SERVER,RESULT} from './../../App/PublicConstant.js';
import React from 'react';
import {Form, Input, Radio, Select, Cascader, Modal, DatePicker, message, Upload, Button, Icon, Tag} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

//上传扫描件
class OriginResultUploadPictureModal_ extends React.Component {

  render() {

    return (
        <Modal title="上传扫描件" visible={this.props.visible} onOk={this.props.onConfirm} onCancel={this.props.onCancel} confirmLoading={this.props.confirmLoading} okText="提交审核">
          <Upload name="file"
                  action= {SERVER + "/api/origin/upload" }
                  data = {{id: this.props.originResultId}}
                  headers={{'TOKEN' : sessionStorage.getItem(SESSION.TOKEN)}}
                  multiple={true}
                  onChange={this.props.onChange}
                  fileList={this.props.fileList}>
            <Button type="primary">
              <Icon type="upload" /> 上传
            </Button>
            <Tag color="orange" className="upload-file-warning">文件名请勿包含下划线</Tag>
            <Tag color="orange">文件大小请勿超过10MB</Tag>
          </Upload>
        </Modal>
    );
  }
}

const OriginResultUploadPictureModal = Form.create()(OriginResultUploadPictureModal_);
export default OriginResultUploadPictureModal;