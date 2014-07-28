/* globals angular */
var states = angular.module("states", ['ui.router']);

states.config(function ($stateProvider, $state) {
    "use strict";

    function addState(name, url, templateUrl, initialChildState) {
        var stateDefinition = {
            url: url,
            views: {
                main: {
                    templateUrl: templateUrl
                }
            }
        };
        if (typeof(initialChildState) === 'function') {
            stateDefinition.onEnter = function () {
                $state.go(initialChildState);
            };
        }
        $stateProvider.state(name, stateDefinition);
    }

    addState("home", "/home", "home/home.html", "home.changeGroups");
    addState("home.changeGroups", "/changeGroups", "home/changeGroups.html");
    addState("home.deploymentGroups", "/deploymentGroups", "home/deploymentGroups.html");
    addState("home.recentDeployments", "/recentDeployments", "home/recentDeployments.html");
    addState("home.scheduledDeployments", "/scheduledDeployments", "home/scheduledDeployments.html");
    addState("home.research", "/research", "home/research.html");
    addState("configure", "/configure", "configure/configure.html", "configure.tableEditor");
    addState("configure.useIndicatorEditor", "/useIndicatorEditor", "configure/useIndicatorEditor.html");
    addState("configure.cxSubscriberServicesEditor", "/cxSubscriberServicesEditor", "configure/cxSubscriberServicesEditor.html");
    addState("configure.regulatoryMappingsEditor", "/regulatoryMappingsEditor", "configure/regulatoryMappingsEditor.html");
    addState("configure.regulatoryMappingsValidator", "/regulatoryMappingsValidator", "configure/regulatoryMappingsValidator.html");
    addState("configure.tableEditor", "/tableEditor", "configure/tableEditor.html");
    addState("configure.iceberg", "/iceberg", "configure/iceberg/iceberg.html");
    addState("configure.iceberg.tableEditor", "/tableEditor", "configure/iceberg/tableEditor.html");
    addState("configure.iceberg.pdbEditor", "/pdbEditor", "configure/iceberg/pdbEditor.html");
    addState("configure.iceberg.codeDomainEditor", "/codeDomainEditor", "configure/iceberg/codeDomainEditor.html");
    addState("configure.iceberg.lqaNavigator", "/lqaNavigator", "configure/iceberg/lqaNavigator.html");
    addState("configure.iceberg.lqatrNavigator", "/lqatrNavigator", "configure/iceberg/lqatrNavigator.html");
    addState("manage", "/manage", "manage/manage.html", "manage.userAccounts");
    addState("manage.applications", "/applications", "manage/applications.html");
    addState("manage.customers", "/customers", "manage/customers.html");
    addState("manage.customerSites", "/customerSites", "manage/customerSites.html");
    addState("manage.databaseSites", "/databaseSites", "manage/databaseSites.html");
    addState("manage.environments", "/environments", "manage/environments.html");
    addState("manage.permissions", "/permissions", "manage/permissions.html");
    addState("manage.securityGroups", "/securityGroups", "manage/securityGroups.html");
    addState("manage.servers", "/servers", "manage/servers.html");
    addState("manage.tableMetadata", "/tableMetadata", "manage/tableMetadata.html");
    addState("manage.userAccounts", "/userAccounts", "manage/userAccounts.html");
    addState("tools", "/tools", "tools/tools.html", "tools.applicationLog");
    addState("tools.applicationLog", "/applicationLog", "tools/applicationLog.html");
    addState("tools.changeLoggingLevels", "/changeLoggingLevels", "tools/changeLoggingLevels.html");
    addState("tools.encryptionTool", "/encryptionTool", "tools/encryptionTool.html");
    addState("tools.refreshCache", "/refreshCache", "tools/refreshCache.html");
    addState("tools.refreshGoldMaster", "/refreshGoldMaster", "tools/refreshGoldMaster.html");
    addState("tools.systemMonitor", "/systemMonitor", "tools/systemMonitor.html");

});