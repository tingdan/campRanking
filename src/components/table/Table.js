import React from 'react';
import {
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn,
    Avatar
} from 'react-md';
import FontAwesome from 'react-fontawesome';




const Table = function(props){
    console.log(props);

   
    
    if(props.data.length == 0)  {
        return (
            <DataTable plain>
                <TableHeader>
              <TableRow>
                <TableColumn>Lorem 1</TableColumn>
                <TableColumn>Lorem 2</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
            
            </TableBody>
            </DataTable>
        );
    }

    else {
        const dataJSX = props.data.map((d,i) => (
            <TableRow key={i}>
                    <TableColumn><span>{i+1}#  </span><Avatar src={props.data[i].img}/>{props.data[i].username}</TableColumn>
                    <TableColumn>{props.data[i].recent}</TableColumn>
                    <TableColumn>{props.data[i].alltime}</TableColumn>
            </TableRow>
           
        ));

    return (
        <DataTable plain>
       
                <TableHeader>
              <TableRow>
                <TableColumn>Camper Name</TableColumn>
                <TableColumn onClick={() => props.changeOrder("recent")}>Points in past 30 days {(props.order === "recent") ? <i className="fas fa-sort-down"></i> : null}</TableColumn>
                <TableColumn onClick={() => props.changeOrder("alltime")}>Points All time {(props.order === "alltime") ? <i className="fas fa-sort-down"></i> : null}</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                {dataJSX}             
            </TableBody>
            </DataTable>
    )
    }
        

}
    

    // if(!props.data) {
    //     return (
    //         <DataTable plain>
    //             <TableHeader>
    //           <TableRow>
    //             <TableColumn>Lorem 1</TableColumn>
    //             <TableColumn>Lorem 2</TableColumn>
    //           </TableRow>
    //         </TableHeader>
    //         <TableBody>
            
    //         </TableBody>
    //         </DataTable>
    //     );
    // }
    // else return (
    //     <DataTable plain>
    //         <TableHeader>
    //       <TableRow>
    //         <TableColumn>Lorem 1</TableColumn>
    //         <TableColumn>Lorem 2</TableColumn>
    //       </TableRow>
    //     </TableHeader>
    //     <TableBody>
    //         {props.data[0].username}  
    //     </TableBody>
    //     </DataTable>
    // );
     



export default Table;