// import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topiclist: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 2,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }],
  articleList: [{
    id: 1,
    title: '喜欢画画的你 赶快咯 ! 今天花几分钟教你来画熊猫宝宝',
    desc: '素描熊猫宝宝，它有着圆圆的脸颊，大大的黑眼圈，胖嘟嘟的身体，标志性的内八字的行走方式，今天给大家分享“皮大大”坐着的绘画步骤教程。 喜欢画画的你..',
    imgUrl: '//upload-images.jianshu.io/upload_images/15259187-c7d5c7f00fdc4a29?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: '喜欢画画的你 赶快咯 ! 今天花几分钟教你来画熊猫宝宝',
    desc: '素描熊猫宝宝，它有着圆圆的脸颊，大大的黑眼圈，胖嘟嘟的身体，标志性的内八字的行走方式，今天给大家分享“皮大大”坐着的绘画步骤教程。 喜欢画画的你..',
    imgUrl: '//upload-images.jianshu.io/upload_images/15259187-c7d5c7f00fdc4a29?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 3,
    title: '喜欢画画的你 赶快咯 ! 今天花几分钟教你来画熊猫宝宝',
    desc: '素描熊猫宝宝，它有着圆圆的脸颊，大大的黑眼圈，胖嘟嘟的身体，标志性的内八字的行走方式，今天给大家分享“皮大大”坐着的绘画步骤教程。 喜欢画画的你..',
    imgUrl: '//upload-images.jianshu.io/upload_images/15259187-c7d5c7f00fdc4a29?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 4,
    title: '喜欢画画的你 赶快咯 ! 今天花几分钟教你来画熊猫宝宝',
    desc: '素描熊猫宝宝，它有着圆圆的脸颊，大大的黑眼圈，胖嘟嘟的身体，标志性的内八字的行走方式，今天给大家分享“皮大大”坐着的绘画步骤教程。 喜欢画画的你..',
    imgUrl: '//upload-images.jianshu.io/upload_images/15259187-c7d5c7f00fdc4a29?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
