import React from "react";
import Box from '../Box/Box';
import "./InfoEscala.css";

function InfoEscala(){
    return (
        <div className="boxInfoEscola">
            <Box>
                <form action="#" method="post">
                    <label htmlFor="dateEscala">Date</label>
                    <input type="date" name="dateEscala" id="dateEscala" />

                    <label htmlFor="gp">Group</label>
                    <input type="text" name="gp" id="gp" />

                    <label htmlFor="manager">manager</label>
                    <input type="text" name="manager" id="manager" />

                    <label htmlFor="coordenador">coordenador</label>
                    <input type="text" name="coordenador" id="coordenador" />

                    <button type="submit">Send</button>
                </form>
            </Box>
        </div>
    );
};

export default InfoEscala;