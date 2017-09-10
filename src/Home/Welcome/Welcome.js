import './Welcome.css'
import React from 'react';
import {Card, BackTop, Calendar} from 'antd';
import $ from 'jquery';

class Welcome extends React.Component {

  test = () => {
    // $.ajax({
    //     url : 'https://10.109.247.72:8443/email/user/register.action?user.username=bob&user.password=1234&user.password2=1234&user.pwdEmail=test@bupt.com&user.question=&user.answer=none&user.alias=&user.gender=MAN&user.phoneNum=&user.address=&user.mark=&user.authCode=bupt',
    //     type : 'POST'
    // });

   window.location.href = 'https://10.109.247.72:8443/email/user/login.action?username=alice&password=1234&receiver=bob@boat2.wuhan';

  }


  render(){
    return (
      <div>
        <BackTop visibilityHeight="200"/>
        <div className='introduce-text'>
          <h1>欢迎来到诺亚健康信息管理系统</h1>
        </div>
        {/* <div style={{width: '100%', border: '1px solid #d9d9d9', borderRadius: 4 ,textAlign: 'center'}}>
          <Calendar fullscreen={false}/>
        </div> */}
        {/* <div>
          <Card className='card' bodyStyle={{ padding: 0 }} onClick={this.test}>
            <div className="custom-image">
              <img alt="example" src="/Home/Welcome/user_card.svg" />
            </div>
            <div className="custom-card">
              <h3>会员管理</h3>
              <p>会员信息、角色级别、所属顾问</p>
            </div>
          </Card>
          <Card className='card' bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" src="/Home/Welcome/doctor_card.svg"/>
            </div>
            <div className="custom-card">
              <h3>职员管理</h3>
              <p>权限配置、所属主管</p>
            </div>
          </Card>
          <Card className='card' bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" src="/Home/Welcome/health_card.svg" />
            </div>
            <div className="custom-card">
              <h3>健康管理</h3>
              <p>健康摘要、就医方案</p>
            </div>
          </Card>
          <Card className='card' bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" src="/Home/Welcome/record_card.svg" />
            </div>
            <div className="custom-card">
              <h3>原始数据管理</h3>
              <p>用户扫描件</p>
            </div>
          </Card>
          <Card className='card' bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" src="/Home/Welcome/origindata_card.svg" />
            </div>
            <div className="custom-card">
              <h3>化验/医技数据管理</h3>
              <p>数据录入、数据导出</p>
            </div>
          </Card>
          <Card className='card' bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" src="/Home/Welcome/config_card.svg" />
            </div>
            <div className="custom-card">
              <h3>系统管理</h3>
              <p>维护检查项目、用户申请单</p>
            </div>
          </Card>
        </div> */}
      </div>
    );
  }
}

export default Welcome;
