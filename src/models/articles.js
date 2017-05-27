import { fetch, fetchTypes } from './../services/article';
import { objToArr } from './../constant/common';
import {routerRedux } from 'dva/router';
export default {
  namespace: 'articles',
  state: {
    type: [],
    list: [],
    currentType:'0'
  },
  reducers: {
    save(state, payload) {
      state = Object.assign(state, {})
      state.list[payload.payload.typeId] = payload.payload.list;
      return state;
    },
    update(state, payload) {
      return { ...state }
    },
    test(state, payload) {
      return { ...state }
    },
    saveTypes(state, payload) {
      return { ...state, type: payload.payload }
    },
    changeType(state,payload){
      return { ... state,currentType:payload.currentType}
    }
  },
  effects: {
    *fetch({ payload: { typeId, page } }, { call, put }) {
      let req = yield call(fetch, typeId, page);
      let type = page > 1 ? 'update' : 'save'
      yield put({
        type: type,
        payload: {
          typeId: typeId,
          list: req
        }
      });
    },
    *fetchTypes({ payload: { } }, { call, put }) {
      let req = yield call(fetchTypes);
      req = req.data.data;
      console.log(req[0]._id)
      yield put({
        type: 'saveTypes',
        payload: req
      });
      yield put({
        type:'changeType',
        currentType:req[0]._id
      })
    },
    *changeCurrentType({payload:{type}},{call,put}){
      yield put({
        type:'changeType',
        currentType:type
      })
    }
  },
  subscriptions: {},
};
