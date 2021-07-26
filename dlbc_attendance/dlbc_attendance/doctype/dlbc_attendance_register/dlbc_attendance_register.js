// Copyright (c) 2021, ugo and contributors
// For license information, please see license.txt
/**
//major table
frappe.ui.form.on('DLBC Attendance Register', {
	// refresh: function(frm) {

	// },

  setup: function(frm){
    //check duplicate entry for member Category
    frm.check_member_category = function(frm, row){
        frm.doc.members_register.forEach(item=>{
          if(row.member_category == '' || row.idx == item.idx) {
            pass
          } else {
            if(row.member_category == item.member_category){
              //clear field
              row.member_category = '';
              frappe.throw(__(`${item.member_category} already exists in row ${item.idx}!`));
              frm.refresh_field(members_register);
            }
          }
        });

    }
    frm.compute_total = function(frm, row){
      let total = 0;
      //loop thru the child Table
      frm.doc.members_register.forEach(item=>{
        total = total + item.number;
      })

      // set Total
      let new_total = frm.doc.total + total;
      console.log(new_total);
      frm.set_value('total', new_total);

    }
  }

});

//child Table
frappe.ui.form.on('Members Register', {

  member_category: function(frm, cdt, cdn){
    //grab the entire record
    let row = locals[cdt][cdn];
    frm.check_member_category(frm, row);
    frm.compute_total(frm, row);
  }
});


frappe.ui.form.on('DLBC Attendance Register', {

  total: function(frm){
    //grab the entire record
    let total = 0;
    total = frm.doc.number_of_adult_male + frm.doc.number_of_adult_female + frm.doc.number_of_youth_male + frm.doc.number_of_youth_female
    + frm.doc.number_of_children_male + frm.doc.number_of_children_female + frm.doc.number_of_visitors
    
    console.log(total)
    frm.set_value('total', total)
  }

});

frappe.ui.form.on("DLBC Attendance Register", "total", function(frm) {
  frm.set_value("total", frm.doc.number_of_adult_male + frm.doc.number_of_adult_female + frm.doc.number_of_youth_male + frm.doc.number_of_youth_female + frm.doc.number_of_children_male + frm.doc.number_of_children_female + frm.doc.number_of_visitors);
});*/

frappe.ui.form.on("DLBC Attendance Register", "number_of_adult_male", function(frm) {
  frm.set_value("total", flt(frm.doc.number_of_adult_male) + flt(frm.doc.number_of_adult_female) + flt(frm.doc.number_of_youth_male) + flt(frm.doc.number_of_youth_female) + flt(frm.doc.number_of_children_male) + flt(frm.doc.number_of_children_female) + flt(frm.doc.number_of_visitors));
});

frappe.ui.form.on("DLBC Attendance Register", "number_of_adult_female", function(frm) {
  frm.set_value("total", flt(frm.doc.number_of_adult_male) + flt(frm.doc.number_of_adult_female) + flt(frm.doc.number_of_youth_male) + flt(frm.doc.number_of_youth_female) + flt(frm.doc.number_of_children_male) + flt(frm.doc.number_of_children_female) + flt(frm.doc.number_of_visitors));
});

frappe.ui.form.on("DLBC Attendance Register", "number_of_youth_male", function(frm) {
  frm.set_value("total", flt(frm.doc.number_of_adult_male) + flt(frm.doc.number_of_adult_female) + flt(frm.doc.number_of_youth_male) + flt(frm.doc.number_of_youth_female) + flt(frm.doc.number_of_children_male) + flt(frm.doc.number_of_children_female) + flt(frm.doc.number_of_visitors));
});

frappe.ui.form.on("DLBC Attendance Register", "number_of_youth_female", function(frm) {
  frm.set_value("total", flt(frm.doc.number_of_adult_male) + flt(frm.doc.number_of_adult_female) + flt(frm.doc.number_of_youth_male) + flt(frm.doc.number_of_youth_female) + flt(frm.doc.number_of_children_male) + flt(frm.doc.number_of_children_female) + flt(frm.doc.number_of_visitors));
});

frappe.ui.form.on("DLBC Attendance Register", "number_of_children_male", function(frm) {
  frm.set_value("total", flt(frm.doc.number_of_adult_male) + flt(frm.doc.number_of_adult_female) + flt(frm.doc.number_of_youth_male) + flt(frm.doc.number_of_youth_female) + flt(frm.doc.number_of_children_male) + flt(frm.doc.number_of_children_female) + flt(frm.doc.number_of_visitors));
});

frappe.ui.form.on("DLBC Attendance Register", "number_of_children_female", function(frm) {
  frm.set_value("total", flt(frm.doc.number_of_adult_male) + flt(frm.doc.number_of_adult_female) + flt(frm.doc.number_of_youth_male) + flt(frm.doc.number_of_youth_female) + flt(frm.doc.number_of_children_male) + flt(frm.doc.number_of_children_female) + flt(frm.doc.number_of_visitors));
});

frappe.ui.form.on("DLBC Attendance Register", "number_of_visitors", function(frm) {
  frm.set_value("total", flt(frm.doc.number_of_adult_male) + flt(frm.doc.number_of_adult_female) + flt(frm.doc.number_of_youth_male) + flt(frm.doc.number_of_youth_female) + flt(frm.doc.number_of_children_male) + flt(frm.doc.number_of_children_female) + flt(frm.doc.number_of_visitors));
});