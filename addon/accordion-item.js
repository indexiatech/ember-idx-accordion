//(c) 2014 Indexia, Inc.
import Em from 'ember';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';
import StyleBindingsMixin from 'ember-idx-utils/mixin/style-bindings';
var computed = Em.computed;

/**
 * AccordionItem component
 *
 * @class AccordionItem
 */
export default Em.Component.extend(WithConfigMixin, {
  classNameBindings: ['styleClasses', 'selectedClass'],
  accordion: computed.alias('parentView'),
  content: Em.computed.alias('accordion.content'),

  /**
   * Bind the specified attributes to the DOM element
   *
   * @property attributeBindings
   * @type Array
   */
  attributeBindings: ['active'],
  selectedClass: (function() {
    var _ref;
    if (this.get('selected')) {
      return (_ref = this.get('config.accordion.itemSelectedClasses')) != null ? _ref.join(" ") : void 0;
    } else {
      return null;
    }
  }).property('selected'),
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.itemClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  panelHeaderClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.panelHeaderClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  panelTitleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.panelTitleClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  panelTogglerClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.panelTogglerClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  panelBodyContainerClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.panelBodyContainerClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  panelBodyClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.panelBodyClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  index: (function() {
    return this.get('accordion.items').indexOf(this);
  }).property('accordion.items.@each'),
  register: (function() {
    return this.get('accordion').addItem(this);
  }).on('init'),
  unregister: (function() {
    return this.get('accordion').removeItem(this);
  }).on('willDestroyElement'),

  /**
   * true if this item is currently selected.
   *
   * @property selected
   * @type Boolean
   */
  selected: (function() {
    return this.get('accordion.selected') === this;
  }).property('accordion.selected'),
  active: (function() {
    if (this.get('selected')) {
      return "true";
    } else {
      return null;
    }
  }).property('selected'),

  /**
   * Select this item.
   *
   * Bound to `click` event.
   *
   * @method select
   */
  select: (function() {
    return this.get('accordion').select(this);
  }).on('click'),

  /**
   * Select this item if it matches the {{#crossLink "Accordiong/select:method"}}selected-idx{{/crossLink}} property set by the Accordion component.
   *
   * @method selectByAccordionParam
   * @private
   */
  selectByParam: (function() {
    var idx;
    if (this.get('accordion.selected') === this) {
      return;
    }
    idx = parseInt(this.get('accordion.selected-idx', 10));
    if (idx === this.get('index')) {
      return this.select();
    }
  }).observes('accordion.selected-idx').on('didInsertElement'),

  /**
   * Listen to `active` property changes and show / hide the item's content according to its state
   *
   * We use observes instead of properties as we need to invoke a method instead of calculating classes only
   * so in the future we can support a transition animation.
   */
  activeDidChange: (function() {
    if (this.get('active')) {
      return this.show();
    } else {
      return this.hide();
    }
  }).observes('active'),
  hide: function() {
    var $accordionBody;
    $accordionBody = this.$('.panel-collapse');
    return $accordionBody.removeClass('in');
  },
  show: function() {
    var $accordionBody;
    $accordionBody = this.$('.panel-collapse');
    return $accordionBody.addClass('in');
  }
});
