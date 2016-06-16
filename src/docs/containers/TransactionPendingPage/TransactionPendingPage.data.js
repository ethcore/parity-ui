export default [
  {
    _desc: 'Transaction on morden with no data',
    id: '0x01',
    from: '0x8704f2c24439592822be3d71d4fca6e87285f673',
    fromBalance: 253,
    to: '0xbb9bc244d798123fde783fcc1c72d3bb8c189413',
    toBalance: 21,
    value: '7b', // 123
    ethValue: 123,
    gas: 2100,
    gasPrice: 0.00003,
    chain: 'morden',
    data: '0x'
  },
  {
    _desc: 'rejected transaction on homestead with data',
    id: '0x02',
    from: '0x8704f2c24439592822be3d71d4fca6e87285f673',
    fromBalance: 253,
    to: '0x9201f84c4a27ec41115f6fd1a140842e884c4b91',
    toBalance: 21,
    value: 'f4240', // 1000000
    ethValue: 1000000,
    gas: 2100,
    gasPrice: 0.00003,
    chain: 'homestead',
    data: '0x66726f6d206d7220617765736f6d6521' // from mr awesome!
  },
  {
    _desc: 'Contract on homestead',
    id: '0x03',
    from: '0x8704f2c24439592822be3d71d4fca6e87285f673',
    fromBalance: 253,
    value: '0x100',
    ethValue: 0,
    gas: 2100,
    gasPrice: 0.00003,
    chain: 'homestead',
    // greeter contract from https://www.ethereum.org/greeter
    data: '0x636f6e7472616374206d6f7274616c207ba202020202f2a20446566696e65207661726961626c65206f776e6572206f6620746865207479706520616464726573732a2fa2020202061646472657373206f776e65723baa202020202f2a20746869732066756e6374696f6e20697320657865637574656420617420696e697469616c697a6174696f6e20616e64207365747320746865206f776e6572206f662074686520636f6e7472616374202a2fa2020202066756e6374696f6e206d6f7274616c2829207b206f776e6572203d206d73672e73656e6465723b207daa202020202f2a2046756e6374696f6e20746f207265636f766572207468652066756e6473206f6e2074686520636f6e7472616374202a2fa2020202066756e6374696f6e206b696c6c2829207b20696620286d73672e73656e646572203d3d206f776e6572292073756963696465286f776e6572293b207da7daa636f6e74726163742067726565746572206973206d6f7274616c207ba202020202f2a20646566696e65207661726961626c65206772656574696e67206f6620746865207479706520737472696e67202a2fa20202020737472696e67206772656574696e673baa202020202f2a20746869732072756e73207768656e2074686520636f6e7472616374206973206578656375746564202a2fa2020202066756e6374696f6e206772656574657228737472696e67205f6772656574696e6729207075626c6963207ba20202020202020206772656574696e67203d205f6772656574696e673ba202020207daa202020202f2a206d61696e2066756e6374696f6e202a2fa2020202066756e6374696f6e206772656574282920636f6e7374616e742072657475726e732028737472696e6729207ba202020202020202072657475726e206772656574696e673ba202020207da7d'
  },
  {
    _desc: 'Contract on homestead',
    id: '0x04',
    from: '0x8704f2c24439592822be3d71d4fca6e87285f673',
    fromBalance: 253,
    value: '0',
    ethValue: 0,
    gas: 2100,
    gasPrice: 0.00003,
    chain: 'homestead',
    // greeter contract from https://www.ethereum.org/greeter
    data: '0x636f6e7472616374206d6f7274616c207ba202020202f2a20446566696e65207661726961626c65206f776e6572206f6620746865207479706520616464726573732a2fa2020202061646472657373206f776e65723baa202020202f2a20746869732066756e6374696f6e20697320657865637574656420617420696e697469616c697a6174696f6e20616e64207365747320746865206f776e6572206f662074686520636f6e7472616374202a2fa2020202066756e6374696f6e206d6f7274616c2829207b206f776e6572203d206d73672e73656e6465723b207daa202020202f2a2046756e6374696f6e20746f207265636f766572207468652066756e6473206f6e2074686520636f6e7472616374202a2fa2020202066756e6374696f6e206b696c6c2829207b20696620286d73672e73656e646572203d3d206f776e6572292073756963696465286f776e6572293b207da7daa636f6e74726163742067726565746572206973206d6f7274616c207ba202020202f2a20646566696e65207661726961626c65206772656574696e67206f6620746865207479706520737472696e67202a2fa20202020737472696e67206772656574696e673baa202020202f2a20746869732072756e73207768656e2074686520636f6e7472616374206973206578656375746564202a2fa2020202066756e6374696f6e206772656574657228737472696e67205f6772656574696e6729207075626c6963207ba20202020202020206772656574696e67203d205f6772656574696e673ba202020207daa202020202f2a206d61696e2066756e6374696f6e202a2fa2020202066756e6374696f6e206772656574282920636f6e7374616e742072657475726e732028737472696e6729207ba202020202020202072657475726e206772656574696e673ba202020207da7d'
  }

];
