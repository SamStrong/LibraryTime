require('dhtmlx-scheduler');
require('../../node_modules/dhtmlx-scheduler/codebase/dhtmlxscheduler.css');

declare var scheduler: any;

function setupScheduler() {
    scheduler.config.xml_date="%Y-%m-%d %H:%i";
    scheduler.config.first_hour = 8;
    scheduler.init('scheduler_here', new Date(), "week");
    //scheduler.load("./data/events.xml");
}

export = setupScheduler;