import React from "react";
import './SelectorWorker.css'

const SelectorWorker = () => {
    return (
        <div>
            <div className="selecPlusbtns">
                <div className="fetures">
                    <form action="#" method="post">
                        <select name="road" id="road">
                            <option value="111">111</option>
                            <option value="112">112</option>
                            <option value="113">113</option>
                            <option value="114">114</option>
                        </select>
                        <select name="timeStart" id="timeStart">
                            <option value="06">6h</option>
                            <option value="07">7h</option>
                            <option value="08">8h</option>
                        </select>
                        <select name="timeEnd" id="timeEnd">
                            <option value="18">18h</option>
                            <option value="19">19h</option>
                            <option value="20">20h</option>
                        </select>
                        <select name="loc" id="loc">
                            <option value="loc1">loc1</option>
                            <option value="loc2">loc2</option>
                            <option value="loc3">loc3</option>
                        </select>
                        <select name="worker" id="worker">
                            <option value="w1">w1</option>
                            <option value="w2">w2</option>
                            <option value="w3">w3</option>
                        </select>
                    </form>
                </div>
                <div className="btns">
                    <button className="btnSend" value='send' type="submit">OK</button>
                    <button className="btnDel" value='del' type="submit">Del</button>
                </div>
            </div>
            <span className="set-faill">Status Erro : Duplicate Worker</span>
        </div>
    );
};

export default SelectorWorker;