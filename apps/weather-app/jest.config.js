module.exports = {
  name: 'weather-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/weather-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
