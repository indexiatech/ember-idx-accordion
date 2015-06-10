//(c) 2014 Indexia, Inc.
import Em from 'ember';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';
import StyleBindingsMixin from 'ember-idx-utils/mixin/style-bindings';

/**
 * Accordion component
 *
 * @class Accordion
 */
export default Em.Component.extend(WithConfigMixin, {
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.classes')) != null ? _ref.join(" ") : void 0;
  }).property(),
  'selected-idx': 0,

  /**
   * A list of {{#crossLink "AccordionItem"}}accordion-item{{/crossLink}} instances.
   */
  items: void 0,
  selected: void 0,
  initItems: (function() {
    return this.set('items', Em.ArrayProxy.create({
      content: []
    }));
  }).on('init'),

  /**
   * Add the given `AccordionItem` instance.
   */
  addItem: function(item) {
    return this.get('items').addObject(item);
  },

  /**
   * Remove the given `AccordionItem` instance.
   */
  removeItem: function(item) {
    return this.get('items').removeObject(item);
  },

  /**
   * Toggle the given item.
   *
   * @method toggle
   * @param {Object} an item instance to select.
   */
  toggle: function(item) {
    if (this.get('selected') === item) {
      Em.debug("Unsecting item: " + (item.get('index')));
      this.unselect();
    } else {
      Em.debug("Selecting item: " + (item.get('index')));
      this.select(item);
    }

    return this.get('selected');
  },

  /**
   * Select the given item.
   *
   * @method select
   * @param {Object} an item instance to select.
   */
  select: function(item) {
    if (!item) {
      return;
    }

    this.set('selected', item);
    return this.set('selected-idx', item.get('index'));
  },

  /**
   * Clears accordion selection.
   *
   * @method unselect
   */
  unselect: function() {
    this.set('selected', undefined);
    return this.set('selected-idx', -1);
  }
});