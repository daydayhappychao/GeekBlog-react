import react from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb } from 'antd';
import { routerRedux } from 'dva/router';

class HeadLayout extends react.Component {
  constructor(props) {
    super(props);
    this._changeCurrentPage = this.changeCurrentPage.bind(this);
  }
  componentDidMount() {
    if (!this.props.articles.type.length) {
      this.props.dispatch({ type: 'articles/fetchTypes', payload: {} })
    }
  }
  changeCurrentPage(type) {
    routerRedux.push({
      pathname:'/'
    })
    this.props.dispatch({ type: 'articles/changeCurrentType', payload: { type: type.key } })
  }
  render() {
    const { Header, Content, Footer } = Layout;
    const articleTypes = this.props.articles.type;
    let selectedKey = [];
    selectedKey.push(this.props.articles.currentType)
    return (
      <Layout>
        <Header style={{ position: 'fixed', width: '100%', zIndex: '100' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={selectedKey}
            onClick={this._changeCurrentPage}
            style={{ lineHeight: '64px' }}
          >
            {
              articleTypes.length ? articleTypes.map(value => <Menu.Item key={value._id}>{value.typeName}</Menu.Item>) : ""
            }
          </Menu>
        </Header>
        <Content style={{ padding: '0 3%', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380, margin: '20px 0' }}>{this.props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>

    )
  }
}
function mapStateToProp(state) {
  const articles = state.articles;
  return {
    articles
  }
}
export default connect(mapStateToProp)(HeadLayout);