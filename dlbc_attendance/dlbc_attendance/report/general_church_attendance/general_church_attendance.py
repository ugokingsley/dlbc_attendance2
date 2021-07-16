# Copyright (c) 2013, ugo and contributors
# For license information, please see license.txt

import frappe
from frappe import _

def execute(filters=None):
	return get_columns(), get_data(filters)


def get_data(filters):
	_from, to = filters.get('from'), filters.get('to')#date range
	conditions = " AND 1=1 "
	if(filters.get('district_church_name')):conditions += f" AND district_church_name='{filters.get('district_church_name')}' "
	if(filters.get('group_of_districts_name')):conditions += f" AND group_of_districts_name='{filters.get('group_of_districts_name')}' "
	if(filters.get('old_group_or_lga_name')):conditions += f" AND district_church_name='{filters.get('old_group_or_lga_name')}' "
	if(filters.get('region')):conditions += f" AND region='{filters.get('region')}' "
	if(filters.get('state')):conditions += f" AND state='{filters.get('state')}' "
	if(filters.get('country_name')):conditions += f" AND state='{filters.get('country_name')}' "
	if(filters.get('dlbc_weekly_activities')):conditions += f" AND state='{filters.get('dlbc_weekly_activities')}' "

	data = frappe.db.sql(f"""SELECT district_church_name,group_of_districts_name,
			old_group_or_lga_name,region,state,country_name, dlbc_weekly_activities FROM
			`tabDLBC Attendance Register` WHERE (creation BETWEEN '{_from}' AND '{to}');""")
	return data

def get_columns():
	return [
		"District Church:Data:180",
		"Group Of Districts:Data:180",
		"Old Group or LGA:Data:180",
		"Region:Data:180",
		"State:Data:180",
		"Country:Data:180"
	]
