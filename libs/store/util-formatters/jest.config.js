module.exports = {
  name: 'store-util-formatters',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/util-formatters',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
