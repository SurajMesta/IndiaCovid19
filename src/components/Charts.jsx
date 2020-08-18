import React,{useState,useEffect} from 'react'
import{Bar,Doughnut,Line,Pie} from 'react-chartjs-2'

const Charts = ({isState,cnf,rec,det}) => {
  


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        {cnf==0?(null):(     <Bar data={{
                          labels:['confirmed','recovered','deaths'],
         datasets:[{
            label:"Statistics",
            data:[cnf,rec,det],
            borderColor:['blue','green','red'],
            backgroundColor: ['rgb(79,100,120)','rgb(67,138,94)','rgb(144,12,63)'],
            hoverBackgroundColor:['rgb(63,153,170)','rgb(186,201,100)','rgb(251,120,19)']
        }]

                    }}/>)}
                   </div>
                    
                    <div className="col-sm-6">
                        {cnf==0?(null):(
                                 <Line data={

                        {
                            labels:['confirmed','recovered','deaths'],
                            datasets:[{
                                label:'statistics',
                                 data:[cnf,rec,det],
                                //    borderColor:['blue','green','red'],
            borderColor: ['rgb(79,100,120)','rgb(67,138,94)','rgb(144,12,63)'],
            backgroundColor:['rgb(135,223,214)'],
            hoverBackgroundColor:['rgb(114,106,149)']
                   
                   

                            }]
                        }
                        
                    }/>
                        )}
               
                </div>
                   
                </div>
               <br/>

                <div className="row">
                    <div className="col-sm-6">
                        {cnf==0?(null):(
                                 <Doughnut data={
                            {
                                labels:['confirmed','recovered','deaths'],
                                datasets:[{
                                  backgroundColor: ['rgb(61,164,171)','rgb(168,223,101)','rgb(232,74,95)'],
                                  hoverBackgroundColor:['rgb(59,105,120)','rgb(67,138,94)','rgb(243,113,33)'],
                                data:[cnf,rec,det]
                                }]
                              
                            }
                        }
                        />
                        )}
                   
                    </div>

                    <div className="col-sm-6">
                     {cnf==0?(null):(
                                 <Pie data={
                            {
                                labels:['confirmed','recovered','deaths'],
                                datasets:[{
                                  backgroundColor: ['rgb(56,62,86)','rgb(121,215,15)','rgb(231,20,20)'],
                                  hoverBackgroundColor:['rgb(50,224,196)','rgb(67,138,94)','rgb(243,113,33)'],
                                data:[cnf,rec,det]
                                }]
                              
                            }
                        }
                        />
                        )}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Charts
