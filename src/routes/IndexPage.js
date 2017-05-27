import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import HeadLayout from './../components/HeadLayout';
import { Button, Table, Spin } from 'antd';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeId: 1
    }
  }
  componentDidMount() {
    const { dispatch, articles } = this.props;
    dispatch({ type: 'articles/fetch', payload: { typeId: this.state.typeId, page: 1 } });
  }
  render() {
    const columns = [{
      title: '名字',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];

    return (
      <div>
        <HeadLayout loading={this.props.loading} defaultSelectedKey='1'>
          <Spin spinning={this.props.loading} tip='玩命加载中' size='large'>
            <div style={{ height: '1000px' }}>
              <Table dataSource={this.props.articles.list[this.state.typeId] ? this.props.articles.list[this.state.typeId].list : []} columns={columns} rowKey="articleId" />
            </div>
          </Spin>
        </HeadLayout>
      </div>
    );

  }
}


IndexPage.propTypes = {
};
function mapStateToProps(state) {
  const articles = state.articles;
  console.log(state)
  return {
    loading: state.loading.models.articles,
    articles
  };
}

export default connect(mapStateToProps)(IndexPage);
