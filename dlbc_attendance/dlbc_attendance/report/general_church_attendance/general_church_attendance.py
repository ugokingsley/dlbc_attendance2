# Copyright (c) 2013, ugo and contributors
# For license information, please see license.txt

import frappe
from frappe import _

def execute(filters=None):
	return get_columns(), get_data(filters)


def get_data(filters):
	_from, to = filters.get('from'), filters.get('to')
	data = frappe.db.sql(f"""SELECT district_church_name,group_of_districts_name,
			old_group_or_lga_name,region,state,country_name FROM `tabDLBC Attendance Register` WHERE
			(creation BETWEEN {_from} AND {to});""")
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
