
EX010000();

function EX010000() {

isc.ListGrid.create({
    ID: "List",
    width:500, height:224, 
    // data: countryData,
    layoutTopMargin:5,


    margin: 5,
    fields:[
        {name:"countryCode", title:"Flag", width:40,  },
        {name:"countryName", title:"Country"},
        {name:"capital", title:"Capital"},
        
    ],

    data:[
        {countryCode:"US", countryName:"United States", capital:"Washington, DC"},
        {countryCode:"CH", countryName:"China", capital:"Beijing"},
        {countryCode:"JA", countryName:"Japan", capital:"Tokyo"},
        {countryCode:"IN", countryName:"India", capital:"New Delhi"},
        {countryCode:"GM", countryName:"Germany", capital:"Berlin"},
        {countryCode:"UK", countryName:"United Kingdom", capital:"London"},
        {countryCode:"FR", countryName:"France", capital:"Paris"},
        {countryCode:"IT", countryName:"Italy", capital:"Rome"},
        {countryCode:"RS", countryName:"Russia", capital:"Moscow"},
        {countryCode:"BR", countryName:"Brazil", capital:"Brasilia"},
        {countryCode:"CA", countryName:"Canada", capital:"Ottawa"},
        {countryCode:"MX", countryName:"Mexico", capital:"Mexico (Distrito Federal)"},
        {countryCode:"SP", countryName:"Spain", capital:"Madrid"},
        {countryCode:"KS", countryName:"South Korea", capital:"Seoul"},
        {countryCode:"ID", countryName:"Indonesia", capital:"Jakarta"},
    ]
   
})


isc.NavigationBar.create({
	ID:"navbar",
	width:"700",
	showRightButton : true,
	rightButtonTitle: " Sağ Buton",
	title: "Navbar'ım",

})



isc.DynamicForm.create({
	ID: "Form" ,
	autoFocus : true,
   	 numCols: 3,   // kaç kolonlu olacağını söyledi yanına koydu yani butonu
   	 margin : 5,

	items:[

			{
				 type: "text",
		            name: "you",
		            title: "İsmini Yazınız",
		            selectOnFocus: true,
		            wrapTitle: false,  	// yazının alt satıra kaymasını engelliyor
		            
			},

			{
				type  : 'button',
				title :  'Gönder',
				width : 80 ,
				startRow : false ,
				click : "isc.say('Merhaba'+ ' ' + form.getValue('you'))"

			}
		
		]
})


isc.DynamicForm.create({
	ID: "butonpopup",
	margin:5 ,
	items: [
			{
				type:"button",				
				title: "Pop-up Tıkla",
				width:80,
				click : function() {
					isc.Window.create({
						width:650,
						height: 650,
						autoSize: true,
          					autoCenter: true,
					       showMinimizeButton: false,
					       canDragReposition: true,
					       canDragResize: false,
					       isModal: true,
					       showModalMask: true,
					      // items:[ıd koycam buraya]
					})
				}
			},

			{
				type: "slider",
				wrapTitle:false,
				title: "Slider deneme",
				
				


			},

			{
				type: "slider",
				wrapTitle:false,
				value: 40 ,
				vertical: true,
				title : "slider deneme 2",
				height: 70,
				
			},

		]


})


isc.VStack.create({
	ID:"vstack",
	margin: 10,
	membersMargin:10,

	members:
		[
			isc.IButton.create({

				title:"deneme",
				

			}),

			isc.IButton.create({
				title:"deneme2",

			}),

			isc.IButton.create({
				title:"deneme3",

			}),
		],

})



isc.TabSet.create({
	ID: "tabs",
	width:500, height:230 ,

		tabs: 
			[
				{
					title: "Tab 1",
				},

				{
					title: "Tab 2",
					pane: List ,
				}, 
			],


})










// MainLayout
isc.VLayout.create({
	members: [navbar,List,Form,butonpopup,vstack,tabs]
})












}











