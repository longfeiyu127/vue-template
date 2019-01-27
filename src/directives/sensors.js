// import sensors from '../plugins/sensors'

export default {
  bind(el, binding, vnode) {
    if (sensors.$touch && binding.value.eventType) {
      el["on" + binding.value.eventType] = function() {
        sensors.eventInterce(binding.value.id);
      };
    }
  }
};
