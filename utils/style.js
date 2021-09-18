import { makeStyles } from "@material-ui/core";

const useStyles_window =makeStyles((theme)=>({
    navbar : {
        background:'#203040',
        '&a':{
            color:'#ffffff',
            marginLeft:10,
        },
    },
    grow:{
        flexGrow: 1,
     },
    nav:{
         color:'#ffffff',
         
    },
    main:{
       minHeight:'80vh',
    },
    brandName:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize:'1.5rem',
        
    },
    back_to_home:{
    marginTop: '15px',
    marginBottom: '15px',
    },
    footer:{
        marginTop:'15px',
        textAlign:'center',
    },

    //Login page css
    register_text:{
         color :'#eb984e',
         fontSize:'16px',
         textDecoration:'none',
    },
    login_page_card:{
       textAlign :'center',
       
    },
    edit_text_items:{      
       flexGrow : 1,
       marginTop:'55px',
    },
    forms:{
        margin: '0 auto',        
        textAlign : 'center',      
    },

    //register page css
    register_forms:{
        marginTop:'25px',
    },
    //shipping page css
    shipping_forms:{
        marginTop:'55px',
    },
    //placeHolder
    PlaceOrder_ShippingAddress_card:{
        width:'100%',
        //margin:'2 auto',        
    },
    order_summary:{
        padding:'5px',
        marginTop:'15px',
    },
    //cart pages
    grid_product_list:{
        marginTop :'25px',
        padding:'0px',
    },
    action_vutton_color:{

    }
    ,
    suvtotal_part:{
        margin:'5px',        
    },
    page_title:{
        marginTop:'15px',
    },
    //leftvar
    leftvar:{
        backgroundColor:'green',
   },
   
}));

export default useStyles_window;