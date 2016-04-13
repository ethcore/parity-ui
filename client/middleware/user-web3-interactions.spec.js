/* global describe, it, beforeEach, expect */

import sinon from 'sinon';
import WebInteractions from './user-web3-interactions';
import * as MiningActions from '../actions/modify-mining';

describe('MIDDLEWARE: User Web3 interactions', () => {
  let cut;

  beforeEach('Mock web3', () => {
    const web3 = null;
    const ethcoreWeb3 = {
      setExtraData: sinon.spy()
    };
    cut = new WebInteractions(web3, ethcoreWeb3);
  });

  it('should get correct function names', () => {
    expect(cut.getMethod('modify minGasPrice')).to.equal('setMinGasPrice');
  });

  it('should invoke web3 when a modify action is dispatched', () => {
    // given
    const extraData = 'Parity';
    const store = null;
    const next = sinon.spy();
    const middleware = cut.toMiddleware()(store)(next);
    const action = MiningActions.modifyExtraData(extraData);
    expect(middleware).to.be.a('function');
    expect(action).to.be.an('object');

    // when
    middleware(action);

    // then
    expect(next.calledWith({
      type: 'update extraData',
      payload: extraData
    })).to.be.true;
  });
});
