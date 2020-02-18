var myMixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },  
  created: function () {
    this.hello();
    
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
};

export default myMixin