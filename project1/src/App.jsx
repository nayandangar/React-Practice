import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassCom from './02_Component/ClassComp'
import MainStyle from './03_Style/MainStyle'
import Mainfile from './04_Example/Mainfile'
import State from './05_State/State'
import LifeCycle from './06_LifecycleMethod/LifeCycle'
// import UseEffect from './07_Hooks/UseEffect/UseEffect/UseEffect'
// import HookFile from './07_Hooks/HookFile'
// import MainProps from './08_Props/MainProps'
import ConditionalRender from './09_ConditonRender-Fragment/ConditionalRender'
// import Task1 from './09_ConditonRender-Fragment/Task1/Task1'
import UseEffectApi from './07_Hooks/UseEffect/UseEffect/UseEffectApi'
import InputCom from './10_CrudOperations/Input/InputCom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocalStorageEx from './10_CrudOperations/Local_Storage/LocalStorageEx'
import LocalCom from './10_CrudOperations/Local_Storage/LocalCom'
import 'react-clock/dist/Clock.css';
import RouterMainfile from './11_RouterFile/RouterMainfile'




export default function App() {

  return (
    <div>
      {/* -------------COMPONENETS------------- */}
      {/* <ClassCom/> */}
      {/* <MainStyle/> */}
      {/* ---------practise project---- */}
      {/* <Mainfile /> */}
      {/* --------- Use State ---- */}
       {/* <State /> */}
      {/* --------- LIFE CYCLE METHOD---- */}
       {/* <LifeCycle /> */}
      {/* --------- Hook--(useeffect)-- */}
       {/* <UseEffectApi /> */}
       {/* <HookFile /> */}
      
      {/* --------- PROPS-[function and class props in main]--------- */}
      {/* <MainProps /> */}
      {/* --------- Conditional Render----------------- */}
       {/* <ConditionalRender/> */}
       {/* <Task1 /> */}
      {/* --------- CRUD OPERATIONS----------------- */}
      {/* [1:input] */}
      {/* <InputCom /> */}
      {/* -------------Local Storage -----------------*/}
      {/* <LocalCom /> */}
      {/* -------------Simple Router  -----------------*/}
      <RouterMainfile />
      <ToastContainer/>
    </div>
  )
}

 
