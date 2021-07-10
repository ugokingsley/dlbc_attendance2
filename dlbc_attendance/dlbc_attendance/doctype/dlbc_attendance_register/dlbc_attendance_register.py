# Copyright (c) 2021, ugo and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class DLBCAttendanceRegister(Document):
	#for validation
	def validate(self):
		'''
		for mem in self.members_register:
			#print(mem.member_category)
			#if mem.member_category is not None:
			if mem.member_category == 'Adult Male':
				frappe.throw((f'You have already added Adult Male before'))
		'''
		pass

	def after_insert(self):
		frappe.msgprint((f'Attendance for {self.date} Created Successfully!'));
