module.exports = {
  name: 'ngnx',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngnx',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
