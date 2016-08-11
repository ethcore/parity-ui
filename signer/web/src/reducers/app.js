
import { handleActions } from 'redux-actions';

const isProd = process.env.NODE_ENV === 'production';

const initialState = {
  isLoading: true,
  isNodeRunning: true,
  isConnected: false,
  logging: !isProd,
  url: window.location.host,
  proxyUrl: 'http://localhost:8080/proxy/proxy.pac',
};

export default handleActions({

  'update isConnected' (state, action) {
    const isDisconnected = state.isConnected && !action.payload;
    return {
      ...state,
      isLoading: false,
      isConnected: action.payload,
      // if we are disconnected assume automatically that node is down
      isNodeRunning: !isDisconnected && state.isNodeRunning
    };
  },

  'update isNodeRunning' (state, action) {
    const isRunning = action.payload;

    return {
      ...state,
      isNodeRunning: isRunning,
      // if node is down assume automatically that we are not connected
      isLoading: isRunning && state.isLoading,
      isConnected: isRunning && state.isConnected
    };
  },

  'update logging' (state, action) {
    return {
      ...state,
      logging: action.payload
    };
  },

  'update url' (state, action) {
    return {
      ...state,
      url: action.payload
    };
  },

  'update proxy' (state, action) {
    return {
      ...state,
      proxyUrl: action.payload
    };
  }

}, initialState);
