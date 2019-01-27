const UA = navigator.userAgent.toLowerCase();
const IS_APP = /xxx/i.test(UA);
const IS_WX = /MicroMessenger/i.test(UA);
const IS_ANDROID = /Android/i.test(UA) || /Linux/i.test(UA);
const IS_IOS = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i);
const ENV = process.env.NODE_ENV;
export default {
  IS_APP,
  IS_WX,
  IS_ANDROID,
  IS_IOS,
  ENV
};
