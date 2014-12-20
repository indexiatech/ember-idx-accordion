import Em from 'ember';
import Config from 'ember-idx-utils/config'

export default {
  name: 'ember-idx-tabs',
  initialize: function() {
    if (!Em.Config) {
        Em.Config = Config = Config.create()
    }

    var defaultConfig = Config.getConfig('default');
    if (!defaultConfig) {
        Config.addConfig('default');
        defaultConfig = Config.getConfig('default');
    }

    //Bootstrap
    var bsConfig = Config.getConfig('bs');
    if (!bsConfig) {
        Config.addConfig('bs');
        bsConfig = Config.getConfig('bs');
    }
    bsConfig['accordion'] = {
        classes: ['panel-group'],
        itemClasses: ['panel', 'panel-default'],
        itemSelectedClasses: ['active'],
        panelHeaderClasses: ['panel-heading'],
        panelTitleClasses: ['panel-title'],
        panelTogglerClasses: ['accordion-toggle'],
        panelBodyContainerClasses: ['panel-collapse','collapse'],
        panelBodyClasses: ['panel-body']
    }
  }
};