if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'frontend'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'frontend'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'frontend'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'frontend'.");
}
var frontend = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Annotation = Kotlin.kotlin.Annotation;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var filterNotNull_0 = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_1 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var StringAttribute = $module$kotlinx_html_js.kotlinx.html.attributes.StringAttribute;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var Unsafe = $module$kotlinx_html_js.kotlinx.html.Unsafe;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var TagConsumer = $module$kotlinx_html_js.kotlinx.html.TagConsumer;
  ReactDOMComponent.prototype = Object.create(ReactComponent.prototype);
  ReactDOMComponent.prototype.constructor = ReactDOMComponent;
  HelloWorld.prototype = Object.create(ReactDOMComponent.prototype);
  HelloWorld.prototype.constructor = HelloWorld;
  ReactComponentNoProps.prototype = Object.create(RProps.prototype);
  ReactComponentNoProps.prototype.constructor = ReactComponentNoProps;
  ReactComponentEmptyProps.prototype = Object.create(RProps.prototype);
  ReactComponentEmptyProps.prototype.constructor = ReactComponentEmptyProps;
  BaseReactExtensionReadWriteProperty.prototype = Object.create(BaseReactExtension.prototype);
  BaseReactExtensionReadWriteProperty.prototype.constructor = BaseReactExtensionReadWriteProperty;
  BaseReactExtensionReadOnlyProperty.prototype = Object.create(BaseReactExtension.prototype);
  BaseReactExtensionReadOnlyProperty.prototype.constructor = BaseReactExtensionReadOnlyProperty;
  DOMProps.prototype = Object.create(RProps.prototype);
  DOMProps.prototype.constructor = DOMProps;
  ReactDOMBuilder$DOMNode.prototype = Object.create(ReactBuilder$Node.prototype);
  ReactDOMBuilder$DOMNode.prototype.constructor = ReactDOMBuilder$DOMNode;
  ReactDOMBuilder.prototype = Object.create(ReactBuilder.prototype);
  ReactDOMBuilder.prototype.constructor = ReactDOMBuilder;
  ReactDOMStatelessComponent.prototype = Object.create(ReactDOMComponent.prototype);
  ReactDOMStatelessComponent.prototype.constructor = ReactDOMStatelessComponent;
  ReactDOMPropslessComponent.prototype = Object.create(ReactDOMComponent.prototype);
  ReactDOMPropslessComponent.prototype.constructor = ReactDOMPropslessComponent;
  ReactDOMStaticComponent.prototype = Object.create(ReactDOMComponent.prototype);
  ReactDOMStaticComponent.prototype.constructor = ReactDOMStaticComponent;
  function main$lambda($receiver) {
    new HelloWorld();
  }
  function main(args) {
    render(ReactDOM, document.getElementById('react-app'), main$lambda);
  }
  function HelloWorld() {
    ReactDOMComponent.call(this);
  }
  function HelloWorld$render$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Hello World By Kotlin Javascript!');
  }
  function HelloWorld$render$lambda($receiver) {
    h1($receiver, void 0, HelloWorld$render$lambda$lambda);
  }
  HelloWorld.prototype.render_vhjzqq$ = function ($receiver) {
    div($receiver, void 0, HelloWorld$render$lambda);
  };
  HelloWorld.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HelloWorld',
    interfaces: [ReactDOMComponent]
  };
  function jsObject$lambda(closure$builder) {
    return function ($receiver) {
      closure$builder($receiver);
    };
  }
  var jsObject = Kotlin.defineInlineFunction('frontend.runtime.wrappers.jsObject_7qq44f$', function (builder) {
    var obj = {};
    builder(obj);
    return obj;
  });
  var js_0 = Kotlin.defineInlineFunction('frontend.runtime.wrappers.js_5ij4lk$', function (builder) {
    var obj = {};
    builder(obj);
    return obj;
  });
  function getOwnPropertyNames($receiver) {
    var me = $receiver;
    return Object.getOwnPropertyNames(me);
  }
  function toPlainObjectStripNull(me) {
    var tmp$_0;
    var obj = {};
    var $receiver = getOwnPropertyNames(me);
    var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var element = $receiver[tmp$_1];
      if (!(Kotlin.equals(element, '__proto__') || Kotlin.equals(element, 'constructor'))) {
        destination_0.add_11rb$(element);
      }
    }
    tmp$_0 = destination_0.iterator();
    while (tmp$_0.hasNext()) {
      var p = tmp$_0.next();
      if (me[p] != null) {
        obj[p] = me[p];
      }
    }
    return obj;
  }
  function jsstyle(builder) {
    var obj = {};
    builder(obj);
    return obj;
  }
  function get_inputValue($receiver) {
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    return (tmp$_5 = (tmp$_4 = (tmp$_1 = Kotlin.isType(tmp$_0 = $receiver.target, HTMLInputElement) ? tmp$_0 : null) != null ? tmp$_1.value : null) != null ? tmp$_4 : (tmp$_3 = Kotlin.isType(tmp$_2 = $receiver.target, HTMLTextAreaElement) ? tmp$_2 : null) != null ? tmp$_3.value : null) != null ? tmp$_5 : '';
  }
  function createInstance($receiver) {
    var ctor = get_js($receiver);
    return new ctor();
  }
  function ReactComponentNoState() {
  }
  ReactComponentNoState.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactComponentNoState',
    interfaces: []
  };
  function ReactComponentNoProps() {
    RProps.call(this);
  }
  ReactComponentNoProps.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactComponentNoProps',
    interfaces: [RProps]
  };
  function ReactComponentEmptyProps() {
    RProps.call(this);
  }
  ReactComponentEmptyProps.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactComponentEmptyProps',
    interfaces: [RProps]
  };
  function ReactDsl() {
  }
  ReactDsl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactDsl',
    interfaces: [Annotation]
  };
  function ReactBuilder() {
    this.path = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.lastLeaved_u0k4lr$_0 = null;
  }
  function ReactBuilder$Node(type, props) {
    this.type = type;
    this.props = props;
    this.children = ArrayList_init();
  }
  Object.defineProperty(ReactBuilder$Node.prototype, 'realType', {
    get: function () {
      return this.type;
    }
  });
  ReactBuilder$Node.prototype.create = function () {
    return ReactWrapper_getInstance().createRaw_139a74$(this.realType, this.props, this.children);
  };
  ReactBuilder$Node.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  Object.defineProperty(ReactBuilder.prototype, 'children', {
    get: function () {
      return this.currentNode().children;
    }
  });
  ReactBuilder.prototype.currentNode = function () {
    return last(this.path);
  };
  ReactBuilder.prototype.currentNodeOfType_rku8s3$ = Kotlin.defineInlineFunction('frontend.react.ReactBuilder.currentNodeOfType_rku8s3$', function (currentNodeOfType$T_0, isT) {
    var tmp$_0;
    return isT(tmp$_0 = this.currentNode()) ? tmp$_0 : Kotlin.throwCCE();
  });
  ReactBuilder.prototype.enterNode_88i3q1$ = function (node) {
    if (this.path.isEmpty() && this.lastLeaved_u0k4lr$_0 != null) {
      console.error('React only allows single element be returned from render() function');
    }
    this.path.add_11rb$(node);
  };
  ReactBuilder.prototype.exitCurrentNode = function () {
    var node = this.path.removeAt_za3lpa$(get_lastIndex(this.path));
    var element = node.create();
    if (!this.path.isEmpty()) {
      this.children.add_11rb$(element);
    }
    this.lastLeaved_u0k4lr$_0 = element;
    return element;
  };
  ReactBuilder.prototype.createReactNode_qfhe8e$ = function (type, props) {
    return new ReactBuilder$Node(type, props);
  };
  ReactBuilder.prototype.enterReactNode_uztyw4$ = function (type, props, handler) {
    this.enterNode_88i3q1$(this.createReactNode_qfhe8e$(type, props));
    handler(this);
    return this.exitCurrentNode();
  };
  ReactBuilder.prototype.instantiateProps_xu0bud$ = Kotlin.defineInlineFunction('frontend.react.ReactBuilder.instantiateProps_xu0bud$', function (instantiateProps$P_0, isP) {
    return _.runtime.reflect.createInstance_1yb8b7$(Kotlin.getKClass(instantiateProps$P_0));
  });
  function ReactBuilder$invoke$lambda($receiver) {
  }
  function ReactBuilder$invoke$lambda_0(closure$props, closure$handler) {
    return function ($receiver) {
      closure$handler(closure$props);
    };
  }
  ReactBuilder.prototype.invoke_rb3dp$_0 = function (invoke$T_0, isT, invoke$P_0, isP, $receiver, handler) {
    if (handler === void 0)
      handler = ReactBuilder$invoke$lambda;
    var props = _.runtime.reflect.createInstance_1yb8b7$(Kotlin.getKClass(invoke$P_0));
    var handler_0 = ReactBuilder$invoke$lambda_0(props, handler);
    return this.enterReactNode_uztyw4$(_.react.ReactComponent.Companion.wrap_v5not5$(Kotlin.getKClass(invoke$T_0)), props, handler_0);
  };
  function ReactBuilder$invoke$lambda_1($receiver) {
  }
  function ReactBuilder$invoke$lambda_2(closure$props, closure$handler) {
    return function ($receiver) {
      closure$handler(closure$props);
    };
  }
  ReactBuilder.prototype.invoke_i56iuw$_0 = function (invoke$T_1, isT, invoke$P_1, isP, $receiver, props, handler) {
    if (handler === void 0)
      handler = ReactBuilder$invoke$lambda_1;
    var handler_0 = ReactBuilder$invoke$lambda_2(props, handler);
    return this.enterReactNode_uztyw4$(_.react.ReactComponent.Companion.wrap_v5not5$(Kotlin.getKClass(invoke$T_1)), props, handler_0);
  };
  function ReactBuilder$node$lambda($receiver) {
  }
  ReactBuilder.prototype.node_g12n31$ = Kotlin.defineInlineFunction('frontend.react.ReactBuilder.node_g12n31$', function (node$T_0, isT, node$P_0, isP, $receiver, props, handler) {
    if (handler === void 0)
      handler = _.react.ReactBuilder.node$f;
    return this.enterReactNode_uztyw4$(_.react.ReactComponent.Companion.wrap_v5not5$(Kotlin.getKClass(node$T_0)), props, handler);
  });
  function ReactBuilder$invoke$lambda_3($receiver) {
  }
  function ReactBuilder$invoke$lambda_4(closure$props, closure$handler) {
    return function ($receiver) {
      closure$handler(closure$props);
    };
  }
  ReactBuilder.prototype.invoke_ahipwd$_0 = function (invoke$P_2, isP, $receiver, handler) {
    if (handler === void 0)
      handler = ReactBuilder$invoke$lambda_3;
    var props = _.runtime.reflect.createInstance_1yb8b7$(Kotlin.getKClass(invoke$P_2));
    return this.enterReactNode_uztyw4$($receiver.ref, props, ReactBuilder$invoke$lambda_4(props, handler));
  };
  function ReactBuilder$node$lambda_0($receiver) {
  }
  ReactBuilder.prototype.node_arc5mv$ = Kotlin.defineInlineFunction('frontend.react.ReactBuilder.node_arc5mv$', function (node$P_1, isP, $receiver, props, handler) {
    if (handler === void 0)
      handler = _.react.ReactBuilder.node$f_0;
    return this.enterReactNode_uztyw4$($receiver.ref, props, handler);
  });
  ReactBuilder.prototype.result = function () {
    return this.lastLeaved_u0k4lr$_0;
  };
  ReactBuilder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactBuilder',
    interfaces: []
  };
  function RProps() {
    this.key = null;
    this.children = null;
  }
  RProps.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RProps',
    interfaces: []
  };
  function BoxedState(state) {
    this.state = state;
  }
  BoxedState.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BoxedState',
    interfaces: []
  };
  function ReactComponentSpec() {
  }
  ReactComponentSpec.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ReactComponentSpec',
    interfaces: []
  };
  var initWrapper;
  function ReactComponent() {
    ReactComponent$Companion_getInstance();
    var tmp$_0;
    this.wrapper_6o0e25$_0 = Kotlin.isType(tmp$_0 = initWrapper, ReactComponentWrapper) ? tmp$_0 : Kotlin.throwCCE();
    this.stateField_6o0e25$_0 = void 0;
    this.isSealed_6o0e25$_0 = false;
    this.hasState_6o0e25$_0 = false;
  }
  Object.defineProperty(ReactComponent.prototype, 'props', {
    get: function () {
      return this.wrapper_6o0e25$_0.props;
    }
  });
  Object.defineProperty(ReactComponent.prototype, 'state', {
    get: function () {
      return this.stateField_6o0e25$_0;
    },
    set: function (value) {
      if (!this.isSealed_6o0e25$_0) {
        this.stateField_6o0e25$_0 = value;
        this.hasState_6o0e25$_0 = true;
      }
       else {
        throw new RuntimeException("You can't set initial state not in constructor");
      }
    }
  });
  ReactComponent.prototype.setState_hgm6vj$ = function (builder) {
    if (!this.isSealed_6o0e25$_0) {
      builder(this.state);
    }
     else {
      this.wrapper_6o0e25$_0.setState_6a2he9$(builder);
    }
  };
  ReactComponent.prototype.replaceState_scoadc$ = function (state) {
    if (!this.isSealed_6o0e25$_0) {
      this.state = state;
    }
     else {
      this.wrapper_6o0e25$_0.replaceState_vpnnum$(state);
    }
  };
  ReactComponent.prototype.seal_6o0e25$_0 = function () {
    this.isSealed_6o0e25$_0 = true;
  };
  ReactComponent.prototype.setStateFromWrapper_f829vx$_0 = function (state) {
    this.stateField_6o0e25$_0 = state;
    this.hasState_6o0e25$_0 = true;
  };
  function ReactComponent$Companion() {
    ReactComponent$Companion_instance = this;
    this.wrappers_0 = HashMap_init();
  }
  ReactComponent$Companion.prototype.wrap_x51phs$ = Kotlin.defineInlineFunction('frontend.react.ReactComponent.Companion.wrap_x51phs$', function (wrap$K_0, isK) {
    return this.wrap_v5not5$(Kotlin.getKClass(wrap$K_0));
  });
  function ReactComponent$Companion$wrap$lambda(closure$clazz) {
    return function (p, context, updater) {
      return new ReactComponentWrapper(p, updater, closure$clazz);
    };
  }
  ReactComponent$Companion.prototype.wrap_v5not5$ = function (clazz) {
    var tmp$_0;
    if (this.wrappers_0.get_11rb$(clazz) == null) {
      this.wrappers_0.put_xwzc9p$(clazz, ReactComponent$Companion$wrap$lambda(clazz));
      this.wrappers_0.get_11rb$(clazz).displayName = get_js(clazz).name;
    }
    return typeof (tmp$_0 = this.wrappers_0.get_11rb$(clazz)) === 'function' ? tmp$_0 : Kotlin.throwCCE();
  };
  ReactComponent$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ReactComponent$Companion_instance = null;
  function ReactComponent$Companion_getInstance() {
    if (ReactComponent$Companion_instance === null) {
      new ReactComponent$Companion();
    }
    return ReactComponent$Companion_instance;
  }
  ReactComponent.prototype.componentWillMount = function () {
  };
  ReactComponent.prototype.componentDidMount = function () {
  };
  ReactComponent.prototype.componentWillUnmount = function () {
  };
  ReactComponent.prototype.componentDidUpdate_swhzy7$ = function (prevProps, prevState) {
  };
  ReactComponent.prototype.shouldComponentUpdate_swhzy7$ = function (nextProps, nextState) {
    return true;
  };
  ReactComponent.prototype.componentWillUpdate = function () {
  };
  ReactComponent.prototype.componentWillReceiveProps_hc7t5p$ = function (nextProps) {
  };
  ReactComponent.prototype.subscribe_jthzip$ = function (listener) {
    this.wrapper_6o0e25$_0.subscribers.add_11rb$(listener);
  };
  ReactComponent.prototype.unsubsctibe_jthzip$ = function (listener) {
    this.wrapper_6o0e25$_0.subscribers.remove_11rb$(listener);
  };
  ReactComponent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactComponent',
    interfaces: [ReactExtensionProvider]
  };
  function ReactComponentWrapper(props, updater, klazz) {
    this.props = props;
    this.updater = updater;
    this.klazz = klazz;
    this.delegate_0 = null;
    this.stateField_0 = null;
    this.subscribers = ArrayList_init();
    var oldGlobal = initWrapper;
    initWrapper = this;
    this.delegate_0 = createInstance(this.klazz);
    this.delegate_0.seal_6o0e25$_0();
    initWrapper = oldGlobal;
    if (!this.delegate_0.hasState_6o0e25$_0) {
      throw new RuntimeException("You haven't set initial state in your constructor of " + Kotlin.toString(this.klazz.simpleName) + '!');
    }
    this.stateField_0 = this.delegate_0.state;
  }
  Object.defineProperty(ReactComponentWrapper.prototype, 'state', {
    get: function () {
      return this.stateField_0;
    },
    set: function (value) {
      this.stateField_0 = value;
      this.delegate_0.setStateFromWrapper_f829vx$_0(value);
    }
  });
  ReactComponentWrapper.prototype.setState_6a2he9$ = function (stateBuilder) {
    var partialState = {};
    stateBuilder(partialState);
    this.updater.enqueueSetState(this, partialState);
  };
  ReactComponentWrapper.prototype.replaceState_vpnnum$ = function (state) {
    this.updater.enqueueReplaceState(this, state);
  };
  ReactComponentWrapper.prototype.render = function () {
    return this.delegate_0.render();
  };
  ReactComponentWrapper.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    return this.delegate_0.shouldComponentUpdate_swhzy7$(nextProps, nextState);
  };
  ReactComponentWrapper.prototype.componentWillReceiveProps = function (nextProps) {
    this.delegate_0.componentWillReceiveProps_hc7t5p$(nextProps);
  };
  ReactComponentWrapper.prototype.componentWillUpdate = function () {
    var tmp$_0;
    tmp$_0 = this.subscribers.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      element.reactComponentWillUpdate();
    }
    this.delegate_0.componentWillUpdate();
  };
  ReactComponentWrapper.prototype.componentDidUpdate = function (prevProps, prevState) {
    this.delegate_0.componentDidUpdate_swhzy7$(prevProps, prevState);
  };
  ReactComponentWrapper.prototype.componentWillUnmount = function () {
    var tmp$_0;
    tmp$_0 = this.subscribers.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      element.reactComponentWillUnmount();
    }
    this.delegate_0.componentWillUnmount();
  };
  ReactComponentWrapper.prototype.componentWillMount = function () {
    var tmp$_0;
    tmp$_0 = this.subscribers.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      element.reactComponentWillMount();
    }
    this.delegate_0.componentWillMount();
  };
  ReactComponentWrapper.prototype.componentDidMount = function () {
    var tmp$_0;
    tmp$_0 = this.subscribers.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      element.reactComponentDidMount();
    }
    this.delegate_0.componentDidMount();
  };
  ReactComponentWrapper.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactComponentWrapper',
    interfaces: []
  };
  function ReactComponentLifecycleListener() {
  }
  ReactComponentLifecycleListener.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ReactComponentLifecycleListener',
    interfaces: []
  };
  function ReactExtensionProvider() {
  }
  ReactExtensionProvider.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ReactExtensionProvider',
    interfaces: []
  };
  function BaseReactExtension(provider) {
    this.provider = provider;
    this.listener_h5e3yy$_0 = new BaseReactExtension$listener$ObjectLiteral(this);
    this.provider.subscribe_jthzip$(this.listener_h5e3yy$_0);
  }
  BaseReactExtension.prototype.componentWillUpdate = function () {
  };
  BaseReactExtension.prototype.componentWillUnmount = function () {
  };
  BaseReactExtension.prototype.componentWillMount = function () {
  };
  BaseReactExtension.prototype.componentDidMount = function () {
  };
  function BaseReactExtension$listener$ObjectLiteral(this$BaseReactExtension) {
    this.this$BaseReactExtension = this$BaseReactExtension;
  }
  BaseReactExtension$listener$ObjectLiteral.prototype.reactComponentWillUpdate = function () {
    this.this$BaseReactExtension.componentWillUpdate();
  };
  BaseReactExtension$listener$ObjectLiteral.prototype.reactComponentWillUnmount = function () {
    this.this$BaseReactExtension.provider.unsubsctibe_jthzip$(this);
    this.this$BaseReactExtension.componentWillUnmount();
  };
  BaseReactExtension$listener$ObjectLiteral.prototype.reactComponentWillMount = function () {
    this.this$BaseReactExtension.componentWillMount();
  };
  BaseReactExtension$listener$ObjectLiteral.prototype.reactComponentDidMount = function () {
    this.this$BaseReactExtension.componentDidMount();
  };
  BaseReactExtension$listener$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ReactComponentLifecycleListener]
  };
  BaseReactExtension.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BaseReactExtension',
    interfaces: []
  };
  function BaseReactExtensionReadWriteProperty(provider) {
    BaseReactExtension.call(this, provider);
  }
  BaseReactExtensionReadWriteProperty.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BaseReactExtensionReadWriteProperty',
    interfaces: [ReadWriteProperty, BaseReactExtension]
  };
  function BaseReactExtensionReadOnlyProperty(provider) {
    BaseReactExtension.call(this, provider);
  }
  BaseReactExtensionReadOnlyProperty.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BaseReactExtensionReadOnlyProperty',
    interfaces: [ReadOnlyProperty, BaseReactExtension]
  };
  function ReactExternalComponentSpec(ref) {
    this.ref = ref;
  }
  ReactExternalComponentSpec.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactExternalComponentSpec',
    interfaces: []
  };
  function ReactElement() {
  }
  ReactElement.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ReactElement',
    interfaces: []
  };
  function ReactWrapper() {
    ReactWrapper_instance = this;
  }
  ReactWrapper.prototype.normalize_s8jyv4$ = function (child) {
    if (child == null) {
      return Kotlin.kotlin.collections.emptyList_287e2$();
    }
     else if (Kotlin.isType(child, Iterable))
      return filterNotNull(child);
    else if (Array.isArray(child))
      return filterNotNull_0(child);
    else
      return listOf_0(child);
  };
  ReactWrapper.prototype.createRaw_139a74$ = function (type, props, child) {
    if (child === void 0)
      child = null;
    var tmp$_0;
    var tmp$_1 = (tmp$_0 = React).createElement;
    var tmp$_2 = [type, toPlainObjectStripNull(props)];
    var tmp$_3 = tmp$_2.concat;
    var $receiver = this.normalize_s8jyv4$(child);
    return tmp$_1.apply(tmp$_0, tmp$_3.call(tmp$_2, Kotlin.kotlin.collections.copyToArray($receiver)));
  };
  ReactWrapper.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ReactWrapper',
    interfaces: []
  };
  var ReactWrapper_instance = null;
  function ReactWrapper_getInstance() {
    if (ReactWrapper_instance === null) {
      new ReactWrapper();
    }
    return ReactWrapper_instance;
  }
  function render($receiver, container, handler) {
    $receiver.render(buildElement(handler), container);
  }
  var events;
  var eventMap;
  function fixAttributeName(event) {
    var tmp$_0;
    return (tmp$_0 = eventMap.get_11rb$(event)) != null ? tmp$_0 : Kotlin.equals(event, 'class') ? 'className' : event;
  }
  var attributeStringString;
  function get_defaultValue($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'defaultValue');
  }
  function set_defaultValue($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'defaultValue', newValue);
  }
  function get_defaultValue_0($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'defaultValue');
  }
  function set_defaultValue_0($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'defaultValue', newValue);
  }
  function get_value($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'value');
  }
  function set_value($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'value', newValue);
  }
  function InnerHTML(__html) {
    this.__html = __html;
  }
  InnerHTML.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InnerHTML',
    interfaces: []
  };
  function DOMProps() {
    RProps.call(this);
    this.dangerouslySetInnerHTML = null;
  }
  DOMProps.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DOMProps',
    interfaces: [RProps]
  };
  function ReactDOMBuilder() {
    ReactBuilder.call(this);
  }
  ReactDOMBuilder.prototype.createReactNode_qfhe8e$ = function (type, props) {
    return new ReactBuilder$Node(type, props);
  };
  function ReactDOMBuilder$DOMNode(tagName) {
    ReactBuilder$Node.call(this, tagName, new DOMProps());
    this.tagName = tagName;
  }
  ReactDOMBuilder$DOMNode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DOMNode',
    interfaces: [ReactBuilder$Node]
  };
  ReactDOMBuilder.prototype.currentDOMNode_0 = function () {
    var tmp$_0;
    return Kotlin.isType(tmp$_0 = this.currentNode(), ReactDOMBuilder$DOMNode) ? tmp$_0 : Kotlin.throwCCE();
  };
  ReactDOMBuilder.prototype.get_key_8alqek$ = function ($receiver) {
    var tmp$_0;
    return (tmp$_0 = this.currentDOMNode_0().props.key) != null ? tmp$_0 : '';
  };
  ReactDOMBuilder.prototype.set_key_mi7nou$ = function ($receiver, value) {
    this.currentDOMNode_0().props.key = value;
  };
  ReactDOMBuilder.prototype.setProp_bm4g0d$ = function (attribute, value) {
    var node = this.currentNode();
    var key = fixAttributeName(attribute);
    if (value == null) {
      delete node.props[key];
    }
     else {
      node.props[key] = value;
    }
  };
  ReactDOMBuilder.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    this.setProp_bm4g0d$(attribute, value);
  };
  ReactDOMBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.onTagContent_6bul2c$($receiver);
  };
  ReactDOMBuilder.prototype.onTagContent_6bul2c$ = function (content) {
    this.children.add_11rb$(content);
  };
  ReactDOMBuilder.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.children.add_11rb$(entity.text);
  };
  function ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral(closure$sb) {
    this.closure$sb = closure$sb;
  }
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.closure$sb.append_gw00v9$($receiver);
  };
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Unsafe]
  };
  ReactDOMBuilder.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    var sb = new StringBuilder();
    block(new ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral(sb));
    var node = this.currentDOMNode_0();
    node.props.dangerouslySetInnerHTML = new InnerHTML(sb.toString());
  };
  ReactDOMBuilder.prototype.onTagStart_tkgjla$ = function (tag) {
    this.enterNode_88i3q1$(new ReactDOMBuilder$DOMNode(tag.tagName));
    var tmp$_0;
    tmp$_0 = tag.attributesEntries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.setProp_bm4g0d$(element.key, element.value);
    }
  };
  ReactDOMBuilder.prototype.onTagEnd_tkgjla$ = function (tag) {
    var tmp$_0 = this.path.isEmpty();
    if (!tmp$_0) {
      tmp$_0 = !Kotlin.equals(this.currentDOMNode_0().tagName.toLowerCase(), tag.tagName.toLowerCase());
    }
    if (tmp$_0)
      throw new IllegalStateException("We haven't entered tag " + tag.tagName + ' but trying to leave');
    this.exitCurrentNode();
  };
  ReactDOMBuilder.prototype.onTagEvent_azi6uv$ = function (tag, event, value) {
    this.setProp_bm4g0d$(event, value);
  };
  ReactDOMBuilder.prototype.finalize = function () {
    return this.result();
  };
  ReactDOMBuilder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactDOMBuilder',
    interfaces: [TagConsumer, ReactBuilder]
  };
  function buildElement(handler) {
    var $receiver = new ReactDOMBuilder();
    handler($receiver);
    return $receiver.finalize();
  }
  function ReactDOMComponent() {
    ReactComponent.call(this);
  }
  ReactDOMComponent.prototype.children_u0k4lg$ = function ($receiver) {
    $receiver.children.addAll_brywnq$(ReactWrapper_getInstance().normalize_s8jyv4$(this.props.children));
  };
  Object.defineProperty(ReactDOMComponent.prototype, 'DOMNode', {
    get: function () {
      return ReactDOM.findDOMNode(this);
    }
  });
  function ReactDOMComponent$render$lambda(this$ReactDOMComponent) {
    return function ($receiver) {
      this$ReactDOMComponent.render_vhjzqq$($receiver);
    };
  }
  ReactDOMComponent.prototype.render = function () {
    return buildElement(ReactDOMComponent$render$lambda(this));
  };
  ReactDOMComponent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactDOMComponent',
    interfaces: [ReactComponent]
  };
  function ReactDOMStatelessComponent() {
    ReactDOMComponent.call(this);
    this.state = new ReactComponentNoState();
  }
  ReactDOMStatelessComponent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactDOMStatelessComponent',
    interfaces: [ReactDOMComponent]
  };
  function ReactDOMPropslessComponent() {
    ReactDOMComponent.call(this);
  }
  ReactDOMPropslessComponent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactDOMPropslessComponent',
    interfaces: [ReactDOMComponent]
  };
  function ReactDOMStaticComponent() {
    ReactDOMComponent.call(this);
    this.state = new ReactComponentNoState();
  }
  ReactDOMStaticComponent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactDOMStaticComponent',
    interfaces: [ReactDOMComponent]
  };
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  ReactDOMBuilder.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  _.main_kand9s$ = main;
  _.HelloWorld = HelloWorld;
  var package$runtime = _.runtime || (_.runtime = {});
  var package$wrappers = package$runtime.wrappers || (package$runtime.wrappers = {});
  package$wrappers.jsObject$f = jsObject$lambda;
  package$wrappers.jsObject_7qq44f$ = jsObject;
  package$wrappers.js_5ij4lk$ = js_0;
  package$wrappers.getOwnPropertyNames_s8jyvk$ = getOwnPropertyNames;
  package$wrappers.toPlainObjectStripNull_za3rmp$ = toPlainObjectStripNull;
  package$wrappers.jsstyle_5ij4lk$ = jsstyle;
  var package$reflect = package$runtime.reflect || (package$runtime.reflect = {});
  package$reflect.createInstance_1yb8b7$ = createInstance;
  var package$react = _.react || (_.react = {});
  package$react.ReactComponentNoState = ReactComponentNoState;
  package$react.ReactComponentNoProps = ReactComponentNoProps;
  package$react.ReactComponentEmptyProps = ReactComponentEmptyProps;
  package$react.ReactDsl = ReactDsl;
  ReactBuilder.Node = ReactBuilder$Node;
  ReactBuilder.node$f = ReactBuilder$node$lambda;
  Object.defineProperty(ReactComponent, 'Companion', {
    get: ReactComponent$Companion_getInstance
  });
  ReactBuilder.node$f_0 = ReactBuilder$node$lambda_0;
  package$react.ReactBuilder = ReactBuilder;
  package$react.RProps = RProps;
  package$react.BoxedState = BoxedState;
  package$react.ReactComponentSpec = ReactComponentSpec;
  package$react.ReactComponent = ReactComponent;
  package$react.ReactComponentWrapper = ReactComponentWrapper;
  package$react.ReactComponentLifecycleListener = ReactComponentLifecycleListener;
  package$react.ReactExtensionProvider = ReactExtensionProvider;
  package$react.BaseReactExtension = BaseReactExtension;
  package$react.BaseReactExtensionReadWriteProperty = BaseReactExtensionReadWriteProperty;
  package$react.BaseReactExtensionReadOnlyProperty = BaseReactExtensionReadOnlyProperty;
  package$react.ReactExternalComponentSpec = ReactExternalComponentSpec;
  package$react.ReactElement = ReactElement;
  var package$dom = package$react.dom || (package$react.dom = {});
  package$dom.render_jzglv5$ = render;
  package$dom.fixAttributeName_61zpoe$ = fixAttributeName;
  package$dom.get_defaultValue_a2ovwx$ = get_defaultValue;
  package$dom.set_defaultValue_q3v29f$ = set_defaultValue;
  package$dom.get_defaultValue_dtfm6v$ = get_defaultValue_0;
  package$dom.set_defaultValue_5ng1o5$ = set_defaultValue_0;
  package$dom.get_value_dtfm6v$ = get_value;
  package$dom.set_value_5ng1o5$ = set_value;
  package$dom.InnerHTML = InnerHTML;
  package$dom.DOMProps = DOMProps;
  ReactDOMBuilder.DOMNode = ReactDOMBuilder$DOMNode;
  package$dom.ReactDOMBuilder = ReactDOMBuilder;
  package$dom.buildElement_yic5sk$ = buildElement;
  package$dom.ReactDOMComponent = ReactDOMComponent;
  package$dom.ReactDOMStatelessComponent = ReactDOMStatelessComponent;
  package$dom.ReactDOMPropslessComponent = ReactDOMPropslessComponent;
  package$dom.ReactDOMStaticComponent = ReactDOMStaticComponent;
  initWrapper = null;
  events = listOf_1(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
  var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$(events, 10));
  var tmp$;
  tmp$ = events.iterator();
  while (tmp$.hasNext()) {
    var item = tmp$.next();
    destination.add_11rb$(to(item.toLowerCase(), item));
  }
  eventMap = toMap(destination);
  attributeStringString = new StringAttribute();
  Kotlin.defineModule('frontend', _);
  main([]);
  return _;
}(typeof frontend === 'undefined' ? {} : frontend, kotlin, this['kotlinx-html-js']);
