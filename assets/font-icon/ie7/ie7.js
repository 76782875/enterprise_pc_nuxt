/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ggicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ggicon-dark_bg_btn1': '&#xe9cb;',
		'ggicon-dark_bg_btn': '&#xe9cc;',
		'ggicon-titleGps': '&#xe9ca;',
		'ggicon-danwei': '&#xe9c9;',
		'ggicon-agree': '&#xe924;',
		'ggicon-disagree': '&#xe9c8;',
		'ggicon-systemManagementActive': '&#xe922;',
		'ggicon-deviceInfoActive': '&#xe923;',
		'ggicon-elevatorsActive': '&#xe918;',
		'ggicon-conditionersActive': '&#xe919;',
		'ggicon-monitoringsActive': '&#xe91a;',
		'ggicon-serviceActive': '&#xe917;',
		'ggicon-checkPlanActive': '&#xe916;',
		'ggicon-buildings': '&#xe9c7;',
		'ggicon-newtime': '&#xe9c3;',
		'ggicon-alters': '&#xe9c4;',
		'ggicon-notification': '&#xe9c5;',
		'ggicon-8': '&#xe9c6;',
		'ggicon-uploadings': '&#xe9c2;',
		'ggicon-forbid': '&#xe9bd;',
		'ggicon-documents': '&#xe9be;',
		'ggicon-resets': '&#xe9bf;',
		'ggicon-authority': '&#xe9c0;',
		'ggicon-modification': '&#xe9c1;',
		'ggicon-service': '&#xe9b9;',
		'ggicon-monitorings': '&#xe9ba;',
		'ggicon-elevators': '&#xe9bb;',
		'ggicon-conditioners': '&#xe9bc;',
		'ggicon-relation': '&#xe962;',
		'ggicon-sort': '&#xe963;',
		'ggicon-downLoad': '&#xe964;',
		'ggicon-addSolid': '&#xe965;',
		'ggicon-update': '&#xe966;',
		'ggicon-deleteSolid': '&#xe967;',
		'ggicon-removeSolid': '&#xe968;',
		'ggicon-trash2': '&#xe969;',
		'ggicon-location': '&#xe96a;',
		'ggicon-edit': '&#xe96b;',
		'ggicon-dortDown': '&#xe96c;',
		'ggicon-selectArrow': '&#xe978;',
		'ggicon-calendar': '&#xe977;',
		'ggicon-noData': '&#xe976;',
		'ggicon-forbidden': '&#xe975;',
		'ggicon-noticeSolid': '&#xe974;',
		'ggicon-illuminationSolid': '&#xe973;',
		'ggicon-sortUp': '&#xe972;',
		'ggicon-blutteeth': '&#xe98b;',
		'ggicon-menu': '&#xe98a;',
		'ggicon-hornSolid': '&#xe988;',
		'ggicon-line': '&#xe989;',
		'ggicon-fireSolid': '&#xe987;',
		'ggicon-file': '&#xe971;',
		'ggicon-infoSearch': '&#xe970;',
		'ggicon-load': '&#xe96f;',
		'ggicon-upload': '&#xe96e;',
		'ggicon-basicInfo': '&#xe96d;',
		'ggicon-yearlyPlan': '&#xe990;',
		'ggicon-maintenanceContract': '&#xe991;',
		'ggicon-examiningReport': '&#xe992;',
		'ggicon-trainingDrills': '&#xe979;',
		'ggicon-pre-planManagement': '&#xe97a;',
		'ggicon-exposureRating': '&#xe97b;',
		'ggicon-ZigBee': '&#xe97c;',
		'ggicon-fireExtinguishingSprinkler': '&#xe97d;',
		'ggicon-foamFire-fighting': '&#xe97e;',
		'ggicon-gasFireControl': '&#xe97f;',
		'ggicon-fan': '&#xe980;',
		'ggicon-illumination': '&#xe981;',
		'ggicon-trumpet': '&#xe982;',
		'ggicon-telphone': '&#xe983;',
		'ggicon-fireSeparationFacility': '&#xe984;',
		'ggicon-powderExtinguishingSystem': '&#xe985;',
		'ggicon-monitorSystem': '&#xe986;',
		'ggicon-waterMist': '&#xe98c;',
		'ggicon-fireElevator': '&#xe98d;',
		'ggicon-annihilator': '&#xe98e;',
		'ggicon-other': '&#xe98f;',
		'ggicon-exit1': '&#xe9b2;',
		'ggicon-info': '&#xe9ae;',
		'ggicon-bluetooth': '&#xe9a9;',
		'ggicon-picture': '&#xe9a6;',
		'ggicon-trash': '&#xe9a1;',
		'ggicon-facility': '&#xe993;',
		'ggicon-fireHydrant': '&#xe994;',
		'ggicon-next': '&#xe995;',
		'ggicon-powerUp': '&#xe996;',
		'ggicon-selected': '&#xe997;',
		'ggicon-sure': '&#xe9b4;',
		'ggicon-water': '&#xe9b8;',
		'ggicon-fire': '&#xe9b7;',
		'ggicon-backlog': '&#xe9b1;',
		'ggicon-safetyAdvisory': '&#xe9ad;',
		'ggicon-horn': '&#xe9aa;',
		'ggicon-switchBtn': '&#xe9a7;',
		'ggicon-monitor': '&#xe9a5;',
		'ggicon-statisticalAnalysis': '&#xe9a2;',
		'ggicon-safetyInspections': '&#xe9a0;',
		'ggicon-facilityInfo': '&#xe99b;',
		'ggicon-systemManagement': '&#xe99a;',
		'ggicon-listImg': '&#xe999;',
		'ggicon-sort2': '&#xe998;',
		'ggicon-back1': '&#xe9b3;',
		'ggicon-lock': '&#xe9b5;',
		'ggicon-user': '&#xe9b6;',
		'ggicon-folder': '&#xe9b0;',
		'ggicon-supervision': '&#xe9af;',
		'ggicon-inspection': '&#xe9ac;',
		'ggicon-equipment': '&#xe9ab;',
		'ggicon-echart': '&#xe9a8;',
		'ggicon-round': '&#xe9a4;',
		'ggicon-bookmark': '&#xe9a3;',
		'ggicon-arrow': '&#xe99f;',
		'ggicon-magnifying-glass': '&#xe99e;',
		'ggicon-download': '&#xe99d;',
		'ggicon-remove': '&#xe99c;',
		'ggicon-home': '&#xe903;',
		'ggicon-runMonitor': '&#xe90c;',
		'ggicon-checkPlan': '&#xe90d;',
		'ggicon-safeRegula': '&#xe90e;',
		'ggicon-messManage': '&#xe90f;',
		'ggicon-countQuery': '&#xe911;',
		'ggicon-deviceInfo': '&#xe912;',
		'ggicon-my': '&#xe913;',
		'ggicon-homeActive': '&#xe914;',
		'ggicon-runMonitorActive': '&#xe915;',
		'ggicon-safeRegulaActive': '&#xe91c;',
		'ggicon-messManageActive': '&#xe91e;',
		'ggicon-countQueryActive': '&#xe921;',
		'ggicon-myActive': '&#xe925;',
		'ggicon-transmittingSet': '&#xe926;',
		'ggicon-terrace': '&#xe927;',
		'ggicon-transmittingSetSolid': '&#xe928;',
		'ggicon-terraceSolid': '&#xe938;',
		'ggicon-sunny': '&#xe940;',
		'ggicon-cloudy': '&#xe941;',
		'ggicon-shade': '&#xe942;',
		'ggicon-flurry': '&#xe943;',
		'ggicon-moderateRain': '&#xe944;',
		'ggicon-heavyRain': '&#xe945;',
		'ggicon-rainstorm': '&#xe946;',
		'ggicon-downpour': '&#xe947;',
		'ggicon-heavyDownpour': '&#xe948;',
		'ggicon-thundershower': '&#xe949;',
		'ggicon-shower': '&#xe94a;',
		'ggicon-moderateRain1': '&#xe94b;',
		'ggicon-ModerateHeavyRain': '&#xe94c;',
		'ggicon--cloudburst': '&#xe94d;',
		'ggicon-heavyRainstorm': '&#xe94e;',
		'ggicon-extraordinaryRainstorm': '&#xe94f;',
		'ggicon-hailstone': '&#xe951;',
		'ggicon-fog': '&#xe952;',
		'ggicon-hailstone1': '&#xe953;',
		'ggicon-freezingRain': '&#xe954;',
		'ggicon-sandStorm': '&#xe955;',
		'ggicon-heavySandstorm': '&#xe956;',
		'ggicon-haze': '&#xe957;',
		'ggicon-sandBlowing': '&#xe958;',
		'ggicon-surfaceDust': '&#xe959;',
		'ggicon-scouther': '&#xe95a;',
		'ggicon-moderateSnow': '&#xe95b;',
		'ggicon-heavySnow': '&#xe95c;',
		'ggicon-heavySnowfall': '&#xe95d;',
		'ggicon-snowShower': '&#xe95e;',
		'ggicon-moderateSnow1': '&#xe95f;',
		'ggicon-heavySnow1': '&#xe960;',
		'ggicon-heavySnowfall1': '&#xe961;',
		'ggicon-exit': '&#xe90a;',
		'ggicon-passowrd': '&#xe90b;',
		'ggicon-arrowBottom': '&#xe906;',
		'ggicon-arrowTop': '&#xe907;',
		'ggicon-floorAlarm': '&#xe908;',
		'ggicon-floorHidden': '&#xe909;',
		'ggicon-enlarge': '&#xe904;',
		'ggicon-narrow': '&#xe905;',
		'ggicon-cloud': '&#xe901;',
		'ggicon-list': '&#xe902;',
		'ggicon-building': '&#xe900;',
		'ggicon-hornAround': '&#xe950;',
		'ggicon-close': '&#xe920;',
		'ggicon-arrowRight': '&#xe91f;',
		'ggicon-forewarning': '&#xe910;',
		'ggicon-back': '&#xe91b;',
		'ggicon-arrowDown': '&#xe91d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ggicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());