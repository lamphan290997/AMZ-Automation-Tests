beforeEach(() => {
    cy.clearCookies();
    cy.visit('https://capture.paveapi.com/TVC-ZN37COBSYX/result/forms')
    .wait(3000);
    cy.contains('Vehicle Type');
    cy.contains('SV');
    cy.contains('CDV');
    cy.contains('SV');
});

describe('Vehicle Type CV', () => {
    it('Submit Check Required', () => {
      /*Check Vehicle Type*/
      cy.get('#VEHICLE_TYPE > :nth-child(1) > :nth-child(2)')
      .click()
      .wait(3000);
      cy.get('#VEHICLE_TYPE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','CV');

      /*Submit Check Mess Required*/
      cy.get('.ant-form-item-control-input-content > .ant-btn')
      .contains('Submit')
      .click()
      .wait(1000);
      cy.get('.ant-notification-notice-message')
      .contains('Missing Answer(s). Please complete it before submitting.');

     /*OVERALL CONDITION*/
      /*Does the unit have two keys with FOBs available?*/
      cy.get(':nth-child(1) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');
      
      /*Is the unit exterior clean?*/
      cy.get(':nth-child(1) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is the interior free of strong odors?*/
      cy.get(':nth-child(1) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');
      
      /*Is the unit interior clean and free of rubbish?*/
      cy.get(':nth-child(1) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(4) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');
      
      /*Driver Door*/
      /*Is door operational?*/
      cy.get(':nth-child(2) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is door frame free of cracks at hinge or other attachment point?*/
      cy.get(':nth-child(2) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is door strap intact?*/
      cy.get(':nth-child(2) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Driver Mirror*/
      /*Is the marker/signal lamp operable?*/
      cy.get(':nth-child(3) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Hood*/
      /*Does hood operate freely?*/
      cy.get(':nth-child(4) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Lights*/
      /*Do headlights illuminate?*/
      cy.get(':nth-child(5) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Do marker lights illuminate?*/
      cy.get(':nth-child(5) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain')
      .contains('Please answer this question!');

      /*Bumper*/
      /*Is license plate installed? (If applicable)*/
      cy.get(':nth-child(6) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Passenger Mirror*/
      /*Is the marker/signal lamp operable? */
      cy.get(':nth-child(7) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Passenger Door Exteriour*/
      /*Is door operational?*/
      cy.get(':nth-child(8) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is door frame free of cracks at hinge or other attachment point?*/
      cy.get(':nth-child(8) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is door strap intact? (Ram only)*/
      cy.get(':nth-child(8) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*RH Cargo Door*/
      /*Does the door operate smoothly and correct?  (CV only)*/
      cy.get(':nth-child(9) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Step*/
      /*Is the RH step present?. (CV only)*/
      cy.get(':nth-child(10) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is the step free from damage? (CV only)*/
      cy.get(':nth-child(10) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Are the step end caps intact? (CV only)*/
      cy.get(':nth-child(10) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');
      
      /*RH Body Panel*/
      /*Is the Amazon branding free of damage?*/
      cy.get(':nth-child(11) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*RH Rear Door*/
      /*Is door operational? (CV only)*/
      cy.get(':nth-child(12) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain')
      .contains('Please answer this question!');

      /*Is door frame free of cracks at hinge or other attachment point? (CV only)*/
      cy.get(':nth-child(12) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain')
      .contains('Please answer this question!');

      /*Is door strap intact? (CV only)*/
      cy.get(':nth-child(12) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain')
      .contains('Please answer this question!');

      /*LH Rear Door*/
      /*Is door operational? (CV only)*/
      cy.get(':nth-child(13) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain')
      .contains('Please answer this question!'); 
    
      /*Is door frame free of cracks at hinge or other attachment point? (CV only)*/
      cy.get(':nth-child(13) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain')
      .contains('Please answer this question!');

      /*Is door strap intact? (CV only)*/
      cy.get(':nth-child(13) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain')
      .contains('Please answer this question!');

      /*Roll-Up Door */
      /*Is door operational? (CV only)*/
      cy.get(':nth-child(14) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!'); 

      /*Tail Lights*/
      /*Are the bulbs operational? */
      cy.get(':nth-child(15) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!'); 

      /*Rear Step*/
      /*Is the RH step present?.*/
      cy.get(':nth-child(16) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is the step free from damage?*/
      cy.get(':nth-child(16) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Are the step end caps intact?*/
      cy.get(':nth-child(16) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Spare Tire*/
      /*Is the spare tire present? (CV only)*/
      cy.get(':nth-child(17) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!'); 

      /*License Plate*/
      /*Is license plate installed?*/
      cy.get(':nth-child(18) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!'); 

      /*Driver Cockpit */
      /*Does vehicle start?*/
      cy.get(':nth-child(19) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is the vehicle running smoothly?*/
      cy.get(':nth-child(19) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is the dashboard free of any warning lights?*/
      cy.get(':nth-child(19) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is instrument cluster free of damage?*/
      cy.get(':nth-child(19) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(4) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is steering wheel free of damage?*/
      cy.get(':nth-child(19) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(5) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is parking brake operational?*/
      cy.get(':nth-child(19) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(6) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is the rear view camera operational?*/
      cy.get(':nth-child(7) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is the Netradyne/camera/telematics device secure?*/
      cy.get(':nth-child(8) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is seat belt free of damage?*/
      cy.get(':nth-child(9) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Does seat belt properly buckle?*/
      cy.get(':nth-child(10) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is driver seat free of damage?*/
      cy.get(':nth-child(11) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is area clean? */
      cy.get(':nth-child(12) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is vehicle registration in vehicle?*/
      cy.get(':nth-child(13) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is safety kit present?*/
      cy.get(':nth-child(14) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Passenger Area*/
      /*Is seat belt free of damage?*/
      cy.get(':nth-child(20) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Does seat belt properly buckle?*/
      cy.get(':nth-child(20) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is driver seat free of damage?*/
      cy.get(':nth-child(20) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is area clean? */
      cy.get(':nth-child(20) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(4) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Are the interiors free of any obvious damage?*/
      cy.get(':nth-child(20) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(5) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is the cabin free of any smoke odors?*/
      cy.get(':nth-child(20) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(6) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Divider Door*/
      /*Is the divider door operational?*/
      cy.get(':nth-child(21) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Does the door latch open?*/
      cy.get(':nth-child(21) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Does the door latch close? */
      cy.get(':nth-child(21) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Cargo Area*/
      /*Are cargo shelves present?*/
      cy.get(':nth-child(22) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Is the cargo area free of damage?*/
      cy.get(':nth-child(22) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(2) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain')
      .contains('Please answer this question!');

      /*Is the area clean? */
      cy.get(':nth-child(22) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(3) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');        

      /*Are interior lights operational?*/
      cy.get(':nth-child(22) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(4) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');   

      /*Is wheel dolly present?*/
      cy.get(':nth-child(22) > .ant-collapse-content > .ant-collapse-content-box > :nth-child(5) > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');  

      /*Frame | Structural & Unibody */
      /*Is the structure or unibody free of any obvious damage?*/
      cy.get(':nth-child(23) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Exhaust System*/
      /*Is the exhaust system free any exhaust leaks or damage?*/
      cy.get(':nth-child(24) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Engine or Mechanical Damage */
      /*Is the engine free of any mechanical damages?*/
      cy.get(':nth-child(25) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');

      /*Electrical*/
      /*Are all the electrical equipment and accessories operable?*/
      cy.get(':nth-child(26) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > .ant-row-center > .ant-col-xs-24 > .ant-row > .ant-col > .ant-form-item-explain > div')
      .contains('Please answer this question!');
    });

    it('Select Full Yes - Select Full NA', () => {
      

      /*OVERALL CONDITION*/
      cy.contains('Overall Condition');

      /*Does the unit have two keys with FOBs available?*/
      cy.get('#OVERALL_CONDITION_DOES_THE_UNIT_HAVE_TWO_KEYS_WITH_FOBS_AVAILABLE > :nth-child(1) > :nth-child(2)')
      .click();/*YES*/
      cy.get('#OVERALL_CONDITION_DOES_THE_UNIT_HAVE_TWO_KEYS_WITH_FOBS_AVAILABLE > :nth-child(2)');/*NO*/
      cy.contains("Does the unit have two keys with FOBs available?");

      /*Is the unit exterior clean?*/
      cy.get('#OVERALL_CONDITION_IS_THE_UNIT_EXTERIOR_CLEAN > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#OVERALL_CONDITION_IS_THE_UNIT_EXTERIOR_CLEAN > :nth-child(2)');/*NO*/
      cy.contains("Is the unit exterior clean?");

      /*Is the interior free of strong odors?*/
      cy.get('#OVERALL_CONDITION_IS_THE_INTERIOR_FREE_OF_STRONG_ODORS > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#OVERALL_CONDITION_IS_THE_INTERIOR_FREE_OF_STRONG_ODORS > :nth-child(2)');/*NO*/
      cy.contains("Is the interior free of strong odors?"); 

      /*Is the unit interior clean and free of rubbish?*/
      cy.get('#OVERALL_CONDITION_IS_THE_UNIT_INTERIOR_CLEAN_AND_FREE_OF_RUBBISH > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#OVERALL_CONDITION_IS_THE_UNIT_INTERIOR_CLEAN_AND_FREE_OF_RUBBISH > :nth-child(2)');/*NO*/
      cy.contains("Is the unit interior clean and free of rubbish?");

      /*Driver Door*/
      cy.contains('Driver Door');

      /*Is door operational?*/
      cy.get('#DRIVER_DOOR_IS_DOOR_OPERATIONAL > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DRIVER_DOOR_IS_DOOR_OPERATIONAL > :nth-child(2)');/*NO*/
      cy.contains("Is door operational?")
      .log('Driver Door => Is door operational? Missing Note Ram Only')
      .pause();

      /*Is door frame free of cracks at hinge or other attachment point?*/
      cy.get('#DRIVER_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#DRIVER_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT > :nth-child(2)');/*NO*/
      cy.contains("Is door frame free of cracks at hinge or other attachment point?");

      /*Is door strap intact?*/
      cy.get('#DRIVER_DOOR_IS_DOOR_STRAP_INTACT > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DRIVER_DOOR_IS_DOOR_STRAP_INTACT > :nth-child(2)');/*NO*/
      cy.contains("Is door strap intact?");

      /*Driver Mirror*/
      cy.contains('Driver Mirror');

      /*Is the marker/signal lamp operable?*/
      cy.get('#DRIVER_MIRROR_IS_THE_MARKER_SIGNAL_LAMP_OPERABLE > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#DRIVER_MIRROR_IS_THE_MARKER_SIGNAL_LAMP_OPERABLE > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Is the marker/signal lamp operable?");

      /*Hood*/
      cy.contains('Hood');

      /*Does hood operate freely?*/
      cy.get('#HOOD_DOES_HOOD_OPERATE_FREELY > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#HOOD_DOES_HOOD_OPERATE_FREELY > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Does hood operate freely?");

      /*Lights*/
      cy.contains('Lights');

      /*Do headlights illuminate?*/
      cy.get('#LIGHTS_DO_HEADLIGHTS_ILLUMINATE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#LIGHTS_DO_HEADLIGHTS_ILLUMINATE > :nth-child(2)');/*NO*/
      cy.contains("Do headlights illuminate?"); 

      /*Do marker lights illuminate?*/
      cy.get('#LIGHTS_DO_MARKER_LIGHTS_ILLUMINATE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#LIGHTS_DO_MARKER_LIGHTS_ILLUMINATE > :nth-child(2)');/*NO*/
      cy.contains("Do marker lights illuminate?");

      /*Bumper*/
      cy.contains('Bumper');

     /*Is license plate installed? (If applicable)*/
      cy.get('#BUMPER_IS_LICENSE_PLATE_INSTALLED_IF_APPLICABLE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#BUMPER_IS_LICENSE_PLATE_INSTALLED_IF_APPLICABLE > :nth-child(2)');/*NO*/
      cy.contains("Is license plate installed? (If applicable)");  

      /*Passenger Mirror*/
      cy.contains('Passenger Mirror');

      /*Is the marker/signal lamp operable? */
      cy.get('#PASSENGER_MIRROR_IS_THE_MARKER_SIGNAL_LAMP_OPERABLE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#PASSENGER_MIRROR_IS_THE_MARKER_SIGNAL_LAMP_OPERABLE > :nth-child(2)');/*NO*/
      cy.contains("Is the marker/signal lamp operable?");  

      /*Passenger Door Exteriour*/
      cy.contains('Passenger Door Exteriour'); 

      /*Is door operational?*/
      cy.get('#PASSENGER_DOOR_EXTERIOUR_IS_DOOR_OPERATIONAL > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#PASSENGER_DOOR_EXTERIOUR_IS_DOOR_OPERATIONAL > :nth-child(2)');/*NO*/
      cy.contains("Is door operational?");  

      /*Is door frame free of cracks at hinge or other attachment point?*/
      cy.get('#PASSENGER_DOOR_EXTERIOUR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#PASSENGER_DOOR_EXTERIOUR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT > :nth-child(2)');/*NO*/
      cy.contains("Is door frame free of cracks at hinge or other attachment point?");  

      /*Is door strap intact? (Ram only)*/
      cy.get('#PASSENGER_DOOR_EXTERIOUR_IS_DOOR_STRAP_INTACT_RAM_ONLY > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#PASSENGER_DOOR_EXTERIOUR_IS_DOOR_STRAP_INTACT_RAM_ONLY > :nth-child(2)');/*NO*/
      cy.contains("Is door strap intact? (Ram only)");    

      /*RH Cargo Door*/
      cy.contains('RH Cargo Door');

      /*Does the door operate smoothly and correct?  (CV only)*/
      cy.get('#RH_CARGO_DOOR_DOES_THE_DOOR_OPERATE_SMOOTHLY_AND_CORRECT__CV_ONLY > :nth-child(1)'); /*YES*/
      cy.get('#RH_CARGO_DOOR_DOES_THE_DOOR_OPERATE_SMOOTHLY_AND_CORRECT__CV_ONLY > :nth-child(2)');/*NO*/
      cy.get('#RH_CARGO_DOOR_DOES_THE_DOOR_OPERATE_SMOOTHLY_AND_CORRECT__CV_ONLY > :nth-child(3)')
      .click();/*NA*/
      cy.contains("Does the door operate smoothly and correct? (CV only)");   
      
      /*Step*/
      cy.contains('Step');

      /*Is the RH step present?. (CV only)*/
      cy.get('#STEP_IS_THE_RH_STEP_PRESENT_CV_ONLY > :nth-child(1)'); /*YES*/
      cy.get('#STEP_IS_THE_RH_STEP_PRESENT_CV_ONLY > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.get('#STEP_IS_THE_RH_STEP_PRESENT_CV_ONLY > :nth-child(3) > :nth-child(2)')
      .click();/*NA*/
      cy.contains("Is the RH step present?. (CV only)"); 
      
      /*Is the step free from damage? (CV only)*/
      cy.get('#STEP_IS_THE_STEP_FREE_FROM_DAMAGE_CV_ONLY > :nth-child(1) > :nth-child(2)'); /*YES*/
      cy.get('#STEP_IS_THE_STEP_FREE_FROM_DAMAGE_CV_ONLY > :nth-child(2)');/*NO*/
      cy.get('#STEP_IS_THE_STEP_FREE_FROM_DAMAGE_CV_ONLY > :nth-child(3) > :nth-child(2)')
      .click();/*NA*/
      cy.contains("Is the step free from damage? (CV only)");   

      /*Are the step end caps intact? (CV only)*/
      cy.get('#STEP_ARE_THE_STEP_END_CAPS_INTACT_CV_ONLY > :nth-child(1) > :nth-child(2)'); /*YES*/
      cy.get('#STEP_ARE_THE_STEP_END_CAPS_INTACT_CV_ONLY > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.get('#STEP_ARE_THE_STEP_END_CAPS_INTACT_CV_ONLY > :nth-child(3)')
      .click();/*NA*/
      cy.contains("Are the step end caps intact? (CV only)");    

      /*RH Body Panel*/
      cy.contains('RH Body Panel');

      /*Is the Amazon branding free of damage?*/
      cy.get('#RH_BODY_PANEL_IS_THE_AMAZON_BRANDING_FREE_OF_DAMAGE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#RH_BODY_PANEL_IS_THE_AMAZON_BRANDING_FREE_OF_DAMAGE > :nth-child(2)');/*NO*/
      cy.contains("Is the Amazon branding free of damage?");

      /*RH Rear Door*/
      cy.contains('RH Rear Door');

      /*Is door operational? (CV only)*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_OPERATIONAL_CV_ONLY > :nth-child(1) > :nth-child(2)'); /*YES*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_OPERATIONAL_CV_ONLY > :nth-child(2)');/*NO*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_OPERATIONAL_CV_ONLY > :nth-child(3)')
      .click();/*NA*/
      cy.contains("Is door operational? (CV only)");  

      /*Is door frame free of cracks at hinge or other attachment point? (CV only)*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT_CV_ONLY > :nth-child(1) > :nth-child(2)'); /*YES*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT_CV_ONLY > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT_CV_ONLY > :nth-child(3) > :nth-child(2)')
      .click();/*NA*/
      cy.contains("Is door frame free of cracks at hinge or other attachment point? (CV only)");  

      /*Is door strap intact? (CV only)*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_STRAP_INTACT_CV_ONLY > :nth-child(1) > :nth-child(2)'); /*YES*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_STRAP_INTACT_CV_ONLY > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_STRAP_INTACT_CV_ONLY > :nth-child(3) > :nth-child(2)')
      .click();/*NA*/
      cy.contains("Is door strap intact? (CV only)");  

      /*LH Rear Door*/
      cy.contains('LH Rear Door');

      /*Is door operational? (CV only)*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_OPERATIONAL_CV_ONLY > :nth-child(1)'); /*YES*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_OPERATIONAL_CV_ONLY > :nth-child(2)');/*NO*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_OPERATIONAL_CV_ONLY > :nth-child(3)')
      .click();/*NA*/
      cy.contains("Is door operational? (CV only)");  

      /*Is door frame free of cracks at hinge or other attachment point? (CV only)*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT_CV_ONLY > :nth-child(1) > :nth-child(2)'); /*YES*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT_CV_ONLY > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT_CV_ONLY > :nth-child(3)')
      .click();/*NA*/
      cy.contains("Is door frame free of cracks at hinge or other attachment point? (CV only)");  

      /*Is door strap intact? (CV only)*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_STRAP_INTACT_CV_ONLY > :nth-child(1) > :nth-child(2)'); /*YES*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_STRAP_INTACT_CV_ONLY > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_STRAP_INTACT_CV_ONLY > :nth-child(3) > :nth-child(2)')
      .click();/*NA*/
      cy.contains("Is door strap intact? (CV only)");  

      /*Roll-Up Door*/
      cy.contains('Roll-Up Door');

      /*Is door operational? (CV/CDV only)*/
      cy.get('#ROLLUP_DOOR_IS_DOOR_OPERATIONAL_CV_CDV_ONLY > :nth-child(1) > :nth-child(2)'); /*YES*/
      cy.get('#ROLLUP_DOOR_IS_DOOR_OPERATIONAL_CV_CDV_ONLY > :nth-child(2)');/*NO*/
      cy.get('#ROLLUP_DOOR_IS_DOOR_OPERATIONAL_CV_CDV_ONLY > :nth-child(3) > :nth-child(2)')
      .click();/*NA*/
      cy.contains("Is door operational? (CV/CDV only)");  

      /*Tail Lights*/
      cy.contains('Tail Lights');

      /*Are the bulbs operational? */
      cy.get('#TAIL_LIGHTS_ARE_THE_BULBS_OPERATIONAL > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#TAIL_LIGHTS_ARE_THE_BULBS_OPERATIONAL > :nth-child(2)');/*NO*/
      cy.contains("Are the bulbs operational?");  

      /*Rear Step*/
      cy.contains('Rear Step');

      /*Is the RH step present?.*/
      cy.get('#REAR_STEP_IS_THE_RH_STEP_PRESENT > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#REAR_STEP_IS_THE_RH_STEP_PRESENT > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Is the RH step present?.");   

      /*Is the step free from damage?*/
      cy.get('#REAR_STEP_IS_THE_STEP_FREE_FROM_DAMAGE > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#REAR_STEP_IS_THE_STEP_FREE_FROM_DAMAGE > :nth-child(2)');/*NO*/
      cy.contains("Is the step free from damage?");       

      /*Are the step end caps intact?*/
      cy.get('#REAR_STEP_ARE_THE_STEP_END_CAPS_INTACT > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#REAR_STEP_ARE_THE_STEP_END_CAPS_INTACT > :nth-child(2)');/*NO*/
      cy.contains("Are the step end caps intact?");   

      /*Spare Tire*/
      cy.contains('Spare Tire');

      /*Is the spare tire present? (CV only)*/
      cy.get('#SPARE_TIRE_IS_THE_SPARE_TIRE_PRESENT_CV_ONLY > :nth-child(1) > :nth-child(2)'); /*YES*/
      cy.get('#SPARE_TIRE_IS_THE_SPARE_TIRE_PRESENT_CV_ONLY > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.get('#SPARE_TIRE_IS_THE_SPARE_TIRE_PRESENT_CV_ONLY > :nth-child(3) > :nth-child(2)')
      .click();/*NA*/
      cy.contains("Is the spare tire present? (CV only)");       

      /*License Plate*/
      cy.contains('License Plate');

      /*Is license plate installed?*/
      cy.get('#LICENSE_PLATE_IS_LICENSE_PLATE_INSTALLED > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#LICENSE_PLATE_IS_LICENSE_PLATE_INSTALLED > :nth-child(2)');/*NO*/
      cy.contains("Is license plate installed?");   

      /*Driver Cockpit */
      cy.contains('Driver Cockpit');

      /*Does vehicle start?*/
      cy.get('#DRIVER_COCKPIT_DOES_VEHICLE_START > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_DOES_VEHICLE_START > :nth-child(2)');/*NO*/
      cy.contains("Does vehicle start?");   

      /*Is the vehicle running smoothly?*/
      cy.get('#DRIVER_COCKPIT_IS_THE_VEHICLE_RUNNING_SMOOTHLY > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_THE_VEHICLE_RUNNING_SMOOTHLY > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Is the vehicle running smoothly?");   

      /*Is the dashboard free of any warning lights?*/
      cy.get('#DRIVER_COCKPIT_IS_THE_DASHBOARD_FREE_OF_ANY_WARNING_LIGHTS > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_THE_DASHBOARD_FREE_OF_ANY_WARNING_LIGHTS > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Is the dashboard free of any warning lights?");   

      /*Is instrument cluster free of damage?*/
      cy.get('#DRIVER_COCKPIT_IS_INSTRUMENT_CLUSTER_FREE_OF_DAMAGE > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_INSTRUMENT_CLUSTER_FREE_OF_DAMAGE > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Is instrument cluster free of damage?");   

      /*Is steering wheel free of damage?*/
      cy.get('#DRIVER_COCKPIT_IS_STEERING_WHEEL_FREE_OF_DAMAGE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_STEERING_WHEEL_FREE_OF_DAMAGE > :nth-child(2)');/*NO*/
      cy.contains("Is steering wheel free of damage?");   

      /*Is parking brake operational?*/
      cy.get('#DRIVER_COCKPIT_IS_PARKING_BRAKE_OPERATIONAL > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_PARKING_BRAKE_OPERATIONAL > :nth-child(2)');/*NO*/
      cy.contains("Is parking brake operational?");   

      /*Is the rear view camera operational?*/
      cy.get('#DRIVER_COCKPIT_IS_THE_REAR_VIEW_CAMERA_OPERATIONAL > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_THE_REAR_VIEW_CAMERA_OPERATIONAL > :nth-child(2)');/*NO*/
      cy.contains("Is the rear view camera operational?");  

      /*Is the Netradyne/camera/telematics device secure?*/
      cy.get('#DRIVER_COCKPIT_IS_THE_NETRADYNECAMERATELEMATICS_DEVICE_SECURE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_THE_NETRADYNECAMERATELEMATICS_DEVICE_SECURE > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Is the Netradyne/camera/telematics device secure?");  

      /*Is seat belt free of damage?*/
      cy.get('#DRIVER_COCKPIT_IS_SEAT_BELT_FREE_OF_DAMAGE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_SEAT_BELT_FREE_OF_DAMAGE > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Is seat belt free of damage?");  

      /*Does seat belt properly buckle?*/
      cy.get('#DRIVER_COCKPIT_DOES_SEAT_BELT_PROPERLY_BUCKLE > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_DOES_SEAT_BELT_PROPERLY_BUCKLE > :nth-child(2)');/*NO*/
      cy.contains("Does seat belt properly buckle?");  

      /*Is driver seat free of damage?*/
      cy.get('#DRIVER_COCKPIT_IS_DRIVER_SEAT_FREE_OF_DAMAGE > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_DRIVER_SEAT_FREE_OF_DAMAGE > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Is driver seat free of damage?");  

      /*Is area clean? */
      cy.get('#DRIVER_COCKPIT_IS_AREA_CLEAN > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_AREA_CLEAN > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Is area clean?");  

      /*Is vehicle registration in vehicle?*/
      cy.get('#DRIVER_COCKPIT_IS_VEHICLE_REGISTRATION_IN_VEHICLE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_VEHICLE_REGISTRATION_IN_VEHICLE > :nth-child(2)');/*NO*/
      cy.contains("Is vehicle registration in vehicle?");  

      /*Is safety kit present?*/
      cy.get('#DRIVER_COCKPIT_IS_SAFETY_KIT_PRESENT > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#DRIVER_COCKPIT_IS_SAFETY_KIT_PRESENT > :nth-child(2)');/*NO*/
      cy.contains("Is safety kit present?");  

      /*Passenger Area */
      cy.contains('Passenger Area');

      /*Are the interiors free of any obvious damage?*/
      cy.get('#PASSENGER_AREA_ARE_THE_INTERIORS_FREE_OF_ANY_OBVIOUS_DAMAGE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#PASSENGER_AREA_ARE_THE_INTERIORS_FREE_OF_ANY_OBVIOUS_DAMAGE > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Are the interiors free of any obvious damage?");  

      /*Is the cabin free of any smoke odors?*/
      cy.get('#PASSENGER_AREA_IS_THE_CABIN_FREE_OF_ANY_SMOKE_ODORS > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#PASSENGER_AREA_IS_THE_CABIN_FREE_OF_ANY_SMOKE_ODORS > :nth-child(2)');/*NO*/
      cy.contains("Is the cabin free of any smoke odors?");  

      /*Is seat belt free of damage?*/
      cy.get('#PASSENGER_AREA_IS_SEAT_BELT_FREE_OF_DAMAGE > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#PASSENGER_AREA_IS_SEAT_BELT_FREE_OF_DAMAGE > :nth-child(2)');/*NO*/
      cy.contains("Is seat belt free of damage?");  

      /*Does seat belt properly buckle?*/
      cy.get('#PASSENGER_AREA_DOES_SEAT_BELT_PROPERLY_BUCKLE > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#PASSENGER_AREA_DOES_SEAT_BELT_PROPERLY_BUCKLE > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Does seat belt properly buckle?");  

      /*Is driver seat free of damage?*/
      cy.get('#PASSENGER_AREA_IS_DRIVER_SEAT_FREE_OF_DAMAGE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#PASSENGER_AREA_IS_DRIVER_SEAT_FREE_OF_DAMAGE > :nth-child(2)');/*NO*/
      cy.contains("Is driver seat free of damage?");  

      /*Is area clean? */
      cy.get('#PASSENGER_AREA_IS_AREA_CLEAN > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#PASSENGER_AREA_IS_AREA_CLEAN > :nth-child(2)');/*NO*/
      cy.contains("Is area clean?");  

      /*Divider Door*/
      cy.contains('Divider Door');

      /*Is the divider door operational?*/
      cy.get('#DIVIDER_DOOR_IS_THE_DIVIDER_DOOR_OPERATIONAL > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DIVIDER_DOOR_IS_THE_DIVIDER_DOOR_OPERATIONAL > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Is the divider door operational?");  

      /*Does the door latch open?*/
      cy.get('#DIVIDER_DOOR_DOES_THE_DOOR_LATCH_OPEN > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DIVIDER_DOOR_DOES_THE_DOOR_LATCH_OPEN > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Does the door latch open?");  

      /*Does the door latch close? */
      cy.get('#DIVIDER_DOOR_DOES_THE_DOOR_LATCH_CLOSE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#DIVIDER_DOOR_DOES_THE_DOOR_LATCH_CLOSE > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Does the door latch close?");  

      /*Cargo Area*/
      cy.contains('Cargo Area');

      /*Are cargo shelves present?*/
      cy.get('#CARGO_AREA_ARE_CARGO_SHELVES_PRESENT > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#CARGO_AREA_ARE_CARGO_SHELVES_PRESENT > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Are cargo shelves present?");  

      /*Is the cargo area free of damage?*/
      cy.get('#CARGO_AREA_IS_THE_CARGO_AREA_FREE_OF_DAMAGE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#CARGO_AREA_IS_THE_CARGO_AREA_FREE_OF_DAMAGE > :nth-child(2)');/*NO*/
      cy.contains("Is the cargo area free of damage?");  

      /*Is the area clean? */
      cy.get('#CARGO_AREA_IS_THE_AREA_CLEAN > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#CARGO_AREA_IS_THE_AREA_CLEAN > :nth-child(2)');/*NO*/
      cy.contains("Is the area clean?");  

      /*Are interior lights operational?*/
      cy.get('#CARGO_AREA_ARE_INTERIOR_LIGHTS_OPERATIONAL > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#CARGO_AREA_ARE_INTERIOR_LIGHTS_OPERATIONAL > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Are interior lights operational?");  

      /*Is wheel dolly present?*/
      cy.get('#CARGO_AREA_IS_WHEEL_DOLLY_PRESENT > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#CARGO_AREA_IS_WHEEL_DOLLY_PRESENT > :nth-child(2)');/*NO*/
      cy.contains("Is wheel dolly present?");  

      /*Frame | Structural & Unibody */
      cy.contains('Frame | Structural & Unibody');

      /*Is the structure or unibody free of any obvious damage?*/
      cy.get('#FRAME__STRUCTURAL__UNIBODY_IS_THE_STRUCTURE_OR_UNIBODY_FREE_OF_ANY_OBVIOUS_DAMAGE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#FRAME__STRUCTURAL__UNIBODY_IS_THE_STRUCTURE_OR_UNIBODY_FREE_OF_ANY_OBVIOUS_DAMAGE > :nth-child(2)');/*NO*/
      cy.contains("Is the structure or unibody free of any obvious damage?");  

      /*Exhaust System*/
      cy.contains('Exhaust System');

      /*Exhaust System*/
      cy.get('#EXHAUST_SYSTEM_IS_THE_EXHAUST_SYSTEM_FREE_ANY_EXHAUST_LEAKS_OR_DAMAGE > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get(':nth-child(24) > .ant-collapse-content > .ant-collapse-content-box > .sc-iklJeh > [style="row-gap: 0px;"] > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-upload-picture-card-wrapper > .ant-upload-list > .ant-upload-select > .ant-upload>input[type=file]')
      .attachFile('amz.jpg',{
      Force: true,
      }).wait(1000);
      cy.get('#EXHAUST_SYSTEM_IS_THE_EXHAUST_SYSTEM_FREE_ANY_EXHAUST_LEAKS_OR_DAMAGE > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Exhaust System");  

      /*Engine or Mechanical Damage */
      cy.contains('Engine or Mechanical Damage');

      /*Is the engine free of any mechanical damages?*/
      cy.get('#ENGINE_OR_MECHANICAL_DAMAGE_IS_THE_ENGINE_FREE_OF_ANY_MECHANICAL_DAMAGES > :nth-child(1) > :nth-child(2)')
      .click(); /*YES*/
      cy.get('#ENGINE_OR_MECHANICAL_DAMAGE_IS_THE_ENGINE_FREE_OF_ANY_MECHANICAL_DAMAGES > :nth-child(2)');/*NO*/
      cy.contains("Is the engine free of any mechanical damages?");  

      /*Electrical*/
      cy.contains('Engine or Mechanical Damage');

      /*Are all the electrical equipment and accessories operable?*/
      cy.get('#ELECTRICAL_ARE_ALL_THE_ELECTRICAL_EQUIPMENT_AND_ACCESSORIES_OPERABLE > :nth-child(1)')
      .click(); /*YES*/
      cy.get('#ELECTRICAL_ARE_ALL_THE_ELECTRICAL_EQUIPMENT_AND_ACCESSORIES_OPERABLE > :nth-child(2) > :nth-child(2)');/*NO*/
      cy.contains("Are all the electrical equipment and accessories operable?"); 
  });

  it('Reload Check Behavior', () => {

    /*Reload*/  
      cy.reload()
      .wait(3000);
      
      /*OVERALL CONDITION*/
      /*Does the unit have two keys with FOBs available?*/
      cy.get('#OVERALL_CONDITION_DOES_THE_UNIT_HAVE_TWO_KEYS_WITH_FOBS_AVAILABLE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes');/*YES*/

      /*Is the unit exterior clean?*/
      cy.get('#OVERALL_CONDITION_IS_THE_UNIT_EXTERIOR_CLEAN > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/
     
      /*Is the interior free of strong odors?*/
      cy.get('#OVERALL_CONDITION_IS_THE_INTERIOR_FREE_OF_STRONG_ODORS > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes');/*YES*/

      /*Is the unit interior clean and free of rubbish?*/
      cy.get('#OVERALL_CONDITION_IS_THE_UNIT_INTERIOR_CLEAN_AND_FREE_OF_RUBBISH > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Driver Door*/
      /*Is door operational?*/
      cy.get('#DRIVER_DOOR_IS_DOOR_OPERATIONAL > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes');/*YES*/

      /*Is door frame free of cracks at hinge or other attachment point?*/
      cy.get('#DRIVER_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is door strap intact?*/
      cy.get('#DRIVER_DOOR_IS_DOOR_STRAP_INTACT > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Driver Mirror*/
      /*Is the marker/signal lamp operable?*/
      cy.get('#DRIVER_MIRROR_IS_THE_MARKER_SIGNAL_LAMP_OPERABLE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Hood*/
      /*Does hood operate freely?*/
      cy.get('#HOOD_DOES_HOOD_OPERATE_FREELY > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Lights*/
      /*Do headlights illuminate?*/
      cy.get('#LIGHTS_DO_HEADLIGHTS_ILLUMINATE > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes');/*YES*/

      /*Do marker lights illuminate?*/
      cy.get('#LIGHTS_DO_MARKER_LIGHTS_ILLUMINATE > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes');/*YES*/

      /*Bumper*/
     /*Is license plate installed? (If applicable)*/
      cy.get('#BUMPER_IS_LICENSE_PLATE_INSTALLED_IF_APPLICABLE > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes');/*YES*/

      /*Passenger Mirror*/
      /*Is the marker/signal lamp operable? */
      cy.get('#PASSENGER_MIRROR_IS_THE_MARKER_SIGNAL_LAMP_OPERABLE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Passenger Door Exteriour*/
      /*Is door operational?*/
      cy.get('#PASSENGER_DOOR_EXTERIOUR_IS_DOOR_OPERATIONAL > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes');/*YES*/

      /*Is door frame free of cracks at hinge or other attachment point?*/
      cy.get('#PASSENGER_DOOR_EXTERIOUR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes');/*YES*/

      /*Is door strap intact? (Ram only)*/
      cy.get('#PASSENGER_DOOR_EXTERIOUR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/   

      /*RH Cargo Door*/
      /*Does the door operate smoothly and correct?  (CV only)*/
      cy.get('#RH_CARGO_DOOR_DOES_THE_DOOR_OPERATE_SMOOTHLY_AND_CORRECT__CV_ONLY > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','NA');/*NA*/
      
      /*Step*/
      /*Is the RH step present?. (CV only)*/
      cy.get('#STEP_IS_THE_RH_STEP_PRESENT_CV_ONLY > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','NA');/*NA*/
      
      /*Is the step free from damage? (CV only)*/
      cy.get('#STEP_IS_THE_STEP_FREE_FROM_DAMAGE_CV_ONLY > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','NA');/*NA*/

      /*Are the step end caps intact? (CV only)*/
      cy.get('#STEP_ARE_THE_STEP_END_CAPS_INTACT_CV_ONLY > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','NA');/*NA*/

      /*RH Body Panel*/
      /*Is the Amazon branding free of damage?*/
      cy.get('#RH_BODY_PANEL_IS_THE_AMAZON_BRANDING_FREE_OF_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*RH Rear Door*/
      /*Is door operational? (CV only)*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_OPERATIONAL_CV_ONLY > label:nth-child(3) > span.ant-radio-button > input')
      .should('have.value','NA');/*NA*/

      /*Is door frame free of cracks at hinge or other attachment point? (CV only)*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT_CV_ONLY > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','NA');/*NA*/

      /*Is door strap intact? (CV only)*/
      cy.get('#RH_REAR_DOOR_IS_DOOR_STRAP_INTACT_CV_ONLY > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','NA');/*NA*/

      /*LH Rear Door*/
      /*Is door operational? (CV only)*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_OPERATIONAL_CV_ONLY > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','NA');/*NA*/

      /*Is door frame free of cracks at hinge or other attachment point? (CV only)*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_FRAME_FREE_OF_CRACKS_AT_HINGE_OR_OTHER_ATTACHMENT_POINT_CV_ONLY > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','NA');/*NA*/

      /*Is door strap intact? (CV only)*/
      cy.get('#LH_REAR_DOOR_IS_DOOR_STRAP_INTACT_CV_ONLY > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','NA');/*NA*/

      /*Roll-Up Door*/
      /*Is door operational? (CV/CDV only)*/
      cy.get('#ROLLUP_DOOR_IS_DOOR_OPERATIONAL_CV_CDV_ONLY > label:nth-child(3) > span.ant-radio-button > input')
      .should('have.value','NA');/*NA*/

      /*Tail Lights*/
      /*Are the bulbs operational? */
      cy.get('#TAIL_LIGHTS_ARE_THE_BULBS_OPERATIONAL > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/
  
      /*Rear Step*/
      /*Is the RH step present?.*/
      cy.get('#REAR_STEP_IS_THE_RH_STEP_PRESENT > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Is the step free from damage?*/
      cy.get('#REAR_STEP_IS_THE_STEP_FREE_FROM_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Are the step end caps intact?*/
      cy.get('#REAR_STEP_ARE_THE_STEP_END_CAPS_INTACT > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Spare Tire*/
      /*Is the spare tire present? (CV only)*/
      cy.get('#SPARE_TIRE_IS_THE_SPARE_TIRE_PRESENT_CV_ONLY > label:nth-child(3) > span.ant-radio-button > input')
      .should('have.value','NA');/*NA*/

      /*License Plate*/
      /*Is license plate installed?*/
      cy.get('#LICENSE_PLATE_IS_LICENSE_PLATE_INSTALLED > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Driver Cockpit */
      /*Does vehicle start?*/
      cy.get('#DRIVER_COCKPIT_DOES_VEHICLE_START > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Is the vehicle running smoothly?*/
      cy.get('#DRIVER_COCKPIT_IS_THE_VEHICLE_RUNNING_SMOOTHLY > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Is the dashboard free of any warning lights?*/
      cy.get('#DRIVER_COCKPIT_IS_THE_DASHBOARD_FREE_OF_ANY_WARNING_LIGHTS > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is instrument cluster free of damage?*/
      cy.get('#DRIVER_COCKPIT_IS_INSTRUMENT_CLUSTER_FREE_OF_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is steering wheel free of damage?*/
      cy.get('#DRIVER_COCKPIT_IS_STEERING_WHEEL_FREE_OF_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is parking brake operational?*/
      cy.get('#DRIVER_COCKPIT_IS_PARKING_BRAKE_OPERATIONAL > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Is the rear view camera operational?*/
      cy.get('#DRIVER_COCKPIT_IS_THE_REAR_VIEW_CAMERA_OPERATIONAL > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Is the Netradyne/camera/telematics device secure?*/
      cy.get('#DRIVER_COCKPIT_IS_THE_NETRADYNECAMERATELEMATICS_DEVICE_SECURE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is seat belt free of damage?*/
      cy.get('#DRIVER_COCKPIT_IS_SEAT_BELT_FREE_OF_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Does seat belt properly buckle?*/
      cy.get('#DRIVER_COCKPIT_DOES_SEAT_BELT_PROPERLY_BUCKLE > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Is driver seat free of damage?*/
      cy.get('#DRIVER_COCKPIT_IS_DRIVER_SEAT_FREE_OF_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is area clean? */
      cy.get('#DRIVER_COCKPIT_IS_AREA_CLEAN > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is vehicle registration in vehicle?*/
      cy.get('#DRIVER_COCKPIT_IS_VEHICLE_REGISTRATION_IN_VEHICLE > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Is safety kit present?*/
      cy.get('#DRIVER_COCKPIT_IS_SAFETY_KIT_PRESENT > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Passenger Area */
      /*Are the interiors free of any obvious damage?*/
      cy.get('#PASSENGER_AREA_ARE_THE_INTERIORS_FREE_OF_ANY_OBVIOUS_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is the cabin free of any smoke odors?*/
      cy.get('#PASSENGER_AREA_IS_THE_CABIN_FREE_OF_ANY_SMOKE_ODORS > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/
      
      /*Is seat belt free of damage?*/
      cy.get('#PASSENGER_AREA_IS_SEAT_BELT_FREE_OF_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Does seat belt properly buckle?*/
      cy.get('#PASSENGER_AREA_DOES_SEAT_BELT_PROPERLY_BUCKLE > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Is driver seat free of damage?*/
      cy.get('#PASSENGER_AREA_IS_DRIVER_SEAT_FREE_OF_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is area clean? */
      cy.get('#PASSENGER_AREA_IS_AREA_CLEAN > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Divider Door*/
      /*Is the divider door operational?*/
      cy.get('#DIVIDER_DOOR_IS_THE_DIVIDER_DOOR_OPERATIONAL > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Does the door latch open?*/
      cy.get('#DIVIDER_DOOR_DOES_THE_DOOR_LATCH_OPEN > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Does the door latch close? */
      cy.get('#DIVIDER_DOOR_DOES_THE_DOOR_LATCH_CLOSE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Cargo Area*/
      /*Are cargo shelves present?*/
      cy.get('#CARGO_AREA_ARE_CARGO_SHELVES_PRESENT > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is the cargo area free of damage?*/
      cy.get('#CARGO_AREA_IS_THE_CARGO_AREA_FREE_OF_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is the area clean? */
      cy.get('#CARGO_AREA_IS_THE_AREA_CLEAN > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Are interior lights operational?*/
      cy.get('#CARGO_AREA_ARE_INTERIOR_LIGHTS_OPERATIONAL > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Is wheel dolly present?*/
      cy.get('#CARGO_AREA_IS_WHEEL_DOLLY_PRESENT > label:nth-child(1) > span.ant-radio-button > input')
      .should('have.value','Yes'); /*YES*/

      /*Frame | Structural & Unibody */
      /*Is the structure or unibody free of any obvious damage?*/
      cy.get('#FRAME__STRUCTURAL__UNIBODY_IS_THE_STRUCTURE_OR_UNIBODY_FREE_OF_ANY_OBVIOUS_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Exhaust System*/
      cy.get('#EXHAUST_SYSTEM_IS_THE_EXHAUST_SYSTEM_FREE_ANY_EXHAUST_LEAKS_OR_DAMAGE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/
      cy.get('#disclosure > div > form > div.ant-collapse.ant-collapse-icon-position-right > div:nth-child(24) > div.ant-collapse-content.ant-collapse-content-active > div > div > div.ant-row.ant-form-item > div > div > div > span > div > div:nth-child(1) > div > div > span > a.ant-upload-list-item-thumbnail')
      .should('be.visible');

      /*Engine or Mechanical Damage */
      /*Is the engine free of any mechanical damages?*/
      cy.get('#ENGINE_OR_MECHANICAL_DAMAGE_IS_THE_ENGINE_FREE_OF_ANY_MECHANICAL_DAMAGES > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Electrical*/
      /*Are all the electrical equipment and accessories operable?*/
      cy.get('#ELECTRICAL_ARE_ALL_THE_ELECTRICAL_EQUIPMENT_AND_ACCESSORIES_OPERABLE > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input')
      .should('have.value','Yes'); /*YES*/

      /*Check Button Submit - Scroll To Top*/
      cy.scrollTo('bottom')
      .wait(1000)
      .get('.ant-back-top-inner')
      .click()
      .wait(1000);
 
      cy.get('.ant-form-item-control-input-content > .ant-btn')
      .contains('Submit')
      .click()
      .wait(1000);
  });
});