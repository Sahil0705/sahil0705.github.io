//alert("Hello");


var jsdata,hsdata1;
var userid=new Array();
var userid1=new Array();
var tot_country = new Array();
var tot_state = new Array();
var c = 0;
async function getCovidapi()
{
    const jsondata = await fetch ('https://api.covid19api.com/summary');
    console.log(jsondata);

    const jsondata1 = await fetch ('https://data.covid19india.org/data.json');
    console.log(jsondata1);
    


    jsdata = await jsondata.json(); // convert json object to js object

    console.log(jsdata.Global);
    tot_country.push(jsdata.Global.TotalConfirmed);
    tot_country.push(jsdata.Global.NewConfirmed);
    tot_country.push(jsdata.Global.NewDeaths);
    tot_country.push(jsdata.Global.TotalDeaths);
    jsdata1 = await jsondata1.json(); // convert json object to js object
    tot_state.push(jsdata1.statewise[0].active);
    tot_state.push(jsdata1.statewise[0].confirmed);
    tot_state.push(jsdata1.statewise[0].deaths);
    tot_state.push(jsdata1.statewise[0].deltaconfirmed);
    tot_state.push(jsdata1.statewise[0].deltadeaths);
    tot_state.push(jsdata1.statewise[0].deltarecovered);
    console.log(jsdata1.statewise);
    for(var k = 0;k<192;k++)
    {
        userid.push(jsdata.Countries[k].Country);
    }
    for(var k = 0;k<38;k++)
    {
        userid1.push(jsdata1.statewise[k].state);
    }
    console.log(userid);
    console.log(userid1);
    $("#user").autocomplete({
        source:userid
    },
    {
            autuFocus:true,
            delay:0,
            minLength:1,
    });
    $("#user1").autocomplete({
        source:userid1
    },
    {
            autuFocus:true,
            delay:0,
            minLength:1,
    });
    function fetch_country()
    {
        for(var i = 0; i<192;i++)
        {
            var con1 = ".container1";
            var con2 = ".container2";
            var con3 = ".container3";
            var con4 = ".container4";
            var con5 = ".container5";
            var con6 = ".container6";

            var c1 = con1.concat((i+1).toString());
            var c2 = con2.concat((i+1).toString());
            var c3 = con3.concat((i+1).toString());
            var c4 = con4.concat((i+1).toString());
            var c5 = con5.concat((i+1).toString());
            var c6 = con6.concat((i+1).toString());

            const container1 = document.querySelector(c1);
            const container2 = document.querySelector(c2);
            const container3 = document.querySelector(c3);
            const container4 = document.querySelector(c4);
            const container5 = document.querySelector(c5);
            const container6 = document.querySelector(c6);

            //alert(container1.className)

            function fetchApiData()
            {
                const htmlData1 = `<tr><td>${jsdata.Countries[i].Country}</td>`;
                const htmlData2 = `<td>${jsdata.Countries[i].CountryCode}</td>`;
                const htmlData3 = `<td>${jsdata.Countries[i].NewConfirmed}</td>`;
                const htmlData4 = `<td>${jsdata.Countries[i].NewDeaths}</td>`;
                const htmlData5 = `<td>${jsdata.Countries[i].TotalConfirmed}</td>`;
                const htmlData6 = `<td>${jsdata.Countries[i].TotalDeaths}</td>`;
            

                container1.insertAdjacentHTML("afterbegin",htmlData1);
                container2.insertAdjacentHTML("afterbegin",htmlData2);
                container3.insertAdjacentHTML("afterbegin",htmlData3);
                container4.insertAdjacentHTML("afterbegin",htmlData4);
                container5.insertAdjacentHTML("afterbegin",htmlData5);
                container6.insertAdjacentHTML("afterbegin",htmlData6);


            }
            // console.log(jsdata);
            // console.log(jsdata.Countries);
            // console.log(jsdata.Countries[0]);
            fetchApiData();
        }  
    }
    fetch_country();

    function fetch_state()
    {
        for(var i = 0; i<38;i++)
        {
            var con1 = ".state1";
            var con2 = ".state2";
            var con3 = ".state3";
            var con4 = ".state4";
            var con5 = ".state5";
            var con6 = ".state6";
            var con7 = ".state7";
            var con8 = ".state8";

            var c1 = con1.concat((i+1).toString());
            var c2 = con2.concat((i+1).toString());
            var c3 = con3.concat((i+1).toString());
            var c4 = con4.concat((i+1).toString());
            var c5 = con5.concat((i+1).toString());
            var c6 = con6.concat((i+1).toString());
            var c7 = con7.concat((i+1).toString());
            var c8 = con8.concat((i+1).toString());

            const container1 = document.querySelector(c1);
            const container2 = document.querySelector(c2);
            const container3 = document.querySelector(c3);
            const container4 = document.querySelector(c4);
            const container5 = document.querySelector(c5);
            const container6 = document.querySelector(c6);
            const container7 = document.querySelector(c7);
            const container8 = document.querySelector(c8);

            //alert(container1.className)

            function fetchApiDatas()
            {
                const htmlData1 = `<tr><td>${jsdata1.statewise[i].state}</td>`;
                const htmlData2 = `<td>${jsdata1.statewise[i].statecode}</td>`;
                const htmlData3 = `<td>${jsdata1.statewise[i].active}</td>`;
                const htmlData4 = `<td>${jsdata1.statewise[i].confirmed}</td>`;
                const htmlData5 = `<td>${jsdata1.statewise[i].deaths}</td>`;
                const htmlData6 = `<td>${jsdata1.statewise[i].deltaconfirmed}</td>`;
                const htmlData7 = `<td>${jsdata1.statewise[i].deltadeaths}</td>`;
                const htmlData8 = `<td>${jsdata1.statewise[i].deltarecovered}</td>`;
            
                container1.insertAdjacentHTML("afterbegin",htmlData1);
                container2.insertAdjacentHTML("afterbegin",htmlData2);
                container3.insertAdjacentHTML("afterbegin",htmlData3);
                container4.insertAdjacentHTML("afterbegin",htmlData4);
                container5.insertAdjacentHTML("afterbegin",htmlData5);
                container6.insertAdjacentHTML("afterbegin",htmlData6);
                container7.insertAdjacentHTML("afterbegin",htmlData7);
                container8.insertAdjacentHTML("afterbegin",htmlData8);
                

            }
            // console.log(jsdata);
            // console.log(jsdata.Countries);
            // console.log(jsdata.Countries[0]);
            fetchApiDatas();

            document.getElementById('user').value = "";
            document.getElementById('user1').value = "";
        }  
    }
    fetch_state();
    handleChange();
    const tot_country_summary = `<div class='col-lg-3 col-12'>
        <h1 class="count" id='counter' data-target=${tot_country[0]}></h1>
        <p align='center' class='p1'>Total Confirmed</p>
    </div>
    <div class='col-lg-3 col-12'>
        <h1 class="count" id='counter' data-target=${tot_country[1]}></h1>
        <p align='center' class='p1'>Newly Confirmed</p>
    </div>
    <div class='col-lg-3 col-12'>
        <h1 class="count" id='counter' data-target=${tot_country[2]}></h1>
        <p align='center' class='p1'>New Deaths</p>
    </div>
    <div class='col-lg-3 col-12'>
        <h1 class="count" id='counter' data-target=${tot_country[3]}></h1>
        <p align='center' class='p1'>Total Deaths</p>
    </div>`;
    document.getElementById('country_summary').insertAdjacentHTML("afterbegin",tot_country_summary);
    var c = 0;
    const counters = document.querySelectorAll('#counter');
    counters.forEach((counter) => {
        counter.innerHTML = 0;
        //alert(counter.innerHTML);
        const updateCounter = () => {
            const targetCount = +counter.getAttribute('data-target');
            const startingCount = Number(counter.innerHTML);
            const incr = 50;
            
            if(startingCount < targetCount)
            {
                counter.innerHTML = `${startingCount + incr}`;
                if(c==0){
                setTimeout(updateCounter, 10);}
                else
                {
                    counter.innerHTML = targetCount;
                }
            }
            else
            {
                counter.innerHTML = targetCount;
                c=1;
            }
        }
        
        updateCounter();
    })

    const tot_state_summary = `<div class='col-lg-2 col-12' id='state1'>
        <h1 class="count" id='counter1' data-target1=${tot_state[0]}>${tot_state[0]}</h1>
        <p align='center' class='p1'>Total Active</p>
    </div>
    <div class='col-lg-2 col-12' id='state2'>
        <h1 class="count" id='counter1' data-target1=${tot_state[1]}>${tot_state[1]}</h1>
        <p align='center' class='p1'>Total Confirmed</p>
    </div>
    <div class='col-lg-2 col-12' id='state3'>
        <h1 class="count" id='counter1' data-target1=${tot_state[2]}>${tot_state[2]}</h1>
        <p align='center' class='p1'>Total Deaths</p>
    </div>
    <div class='col-lg-2 col-12' id='state4'>
        <h1 class="count" id='counter1' data-target1=${tot_state[3]}>${tot_state[3]}</h1>
        <p align='center' class='p1'>Total Delta Confirmed</p>
    </div>
    <div class='col-lg-2 col-12' id='state5'>
        <h1 class="count" id='counter1' data-target1=${tot_state[4]}>${tot_state[4]}</h1>
        <p align='center' class='p1'>Total Delta Confirmed</p>
    </div>
    <div class='col-lg-2 col-12' id='state6'>
    <h1 class="count" id='counter1' data-target1=${tot_state[5]}>${tot_state[5]}</h1>
    <p align='center' class='p1'>Total Delta Recovered</p>
</div>`;
    document.getElementById('state_summary').insertAdjacentHTML("afterbegin",tot_state_summary);
    var c = 0;
}

function handleChange()
{
    if(document.getElementById('myRadio1').checked) 
    {
        document.getElementById('div1').style.display="block";
        document.getElementById('div3').style.display="block";
        document.getElementById('div4').style.display="none";
        document.getElementById('div2').style.display="none";
        document.getElementById('div5').style.display="none";
        document.getElementById('div6').style.display="none";

        
    }
    else if(document.getElementById('myRadio2').checked) 
    {
        document.getElementById('div1').style.display="none";
        document.getElementById('div3').style.display="none";
        document.getElementById('div4').style.display="none";
        document.getElementById('div2').style.display="block";
        document.getElementById('div5').style.display="block";
        document.getElementById('div6').style.display="none";
        

        
    }
    document.getElementById('user').value = "";
    document.getElementById('user1').value = "";
}

function filter_country()
{
    var fitler_country = document.getElementById('user').value;
    var c = 0;
    for(var i =0;i<192;i++)
    {
        if(jsdata.Countries[i].Country == fitler_country)
        {
            document.getElementById("country").innerHTML = jsdata.Countries[i].Country;
            document.getElementById("count_code").innerHTML = jsdata.Countries[i].CountryCode;
            document.getElementById("new_conf").innerHTML = jsdata.Countries[i].NewConfirmed;
            document.getElementById("new_death").innerHTML = jsdata.Countries[i].NewDeaths;
            document.getElementById("tot_conf").innerHTML = jsdata.Countries[i].TotalConfirmed;
            document.getElementById("tot_death").innerHTML = jsdata.Countries[i].TotalDeaths;

            document.getElementById('div1').style.display="none";
            document.getElementById('div3').style.display="block";
            document.getElementById('div4').style.display="block";
            document.getElementById('div2').style.display="none";
            document.getElementById('div5').style.display="none";
            document.getElementById('div6').style.display="none";
            c=1
        }
    }
    if(c==0)
    {
        alert("Please select the country from the names mentioned in dropdown");
    }
    document.getElementById('user').value = "";
}

function filter_state()
{
    var filter_state = document.getElementById('user1').value;
    var c1 = 0;
    for(var i =0;i<38;i++)
    {
        if(jsdata1.statewise[i].state == filter_state)
        {
            document.getElementById("state").innerHTML = jsdata1.statewise[i].state;
            document.getElementById("state_code").innerHTML = jsdata1.statewise[i].statecode;
            document.getElementById("active").innerHTML = jsdata1.statewise[i].active;
            document.getElementById("confirmed").innerHTML = jsdata1.statewise[i].confirmed;
            document.getElementById("deaths").innerHTML = jsdata1.statewise[i].deaths;
            document.getElementById("delta_conf").innerHTML = jsdata1.statewise[i].deltaconfirmed;
            document.getElementById("delta_death").innerHTML = jsdata1.statewise[i].deltadeaths;
            document.getElementById("delta_recov").innerHTML = jsdata1.statewise[i].deltarecovered;
        
            document.getElementById('div1').style.display="none";
            document.getElementById('div3').style.display="none";
            document.getElementById('div4').style.display="none";
            document.getElementById('div2').style.display="none";
            document.getElementById('div5').style.display="block";
            document.getElementById('div6').style.display="block";

            c1=1;

        }
    }
    if(c1==0)
    {
        alert("Please select the state from the names mentioned in dropdown");
    }
    document.getElementById('user1').value = "";


}
$(document).ready(function(){
    $(window).scroll(function(){
        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if((positiontop>428) && (positiontop<950))
        {
            console.log("Hello");
            $('#aboutcor').addClass('animate__bounceIn');
        }
        
    })
})
function print1()
{
    window.print();
}