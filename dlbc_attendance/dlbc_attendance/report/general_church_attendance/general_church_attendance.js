// Copyright (c) 2016, ugo and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["General Church Attendance"] = {
	"filters": [
		{
			"fieldname": "from",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": 70,
			"reqd": 1,
			"default": dateutil.year_start()
		},
		{
			"fieldname": "to",
			"label": __("To Date"),
			"fieldtype": "Date",
			"width": 70,
			"reqd": 1,
			"default": dateutil.year_start()
		},
		{
			"fieldname": "district_church_name",
			"label": __("District Church"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "group_of_districts_name",
			"label": __("Group Of District"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "old_group_or_lga_name",
			"label": __("Old Group or LGA"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "region",
			"label": __("Region"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "state",
			"label": __("State"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "country_name",
			"label": __("Country"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "dlbc_weekly_activities",
			"label": __("Weekly Activities"),
			"fieldtype": "Link",
			"options": "DLBC Weekly Activities",
			"width": 100,
			"reqd": 0,
		},
		
	]
};
