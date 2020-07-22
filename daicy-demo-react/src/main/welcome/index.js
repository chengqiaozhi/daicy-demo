import React,{Component} from "react";
import { Markdown } from 'react-showdown2';
import "./index.css"
import bg from "../img/daicy.png"
export default  class Welcome extends Component {

    render() {
        let md = "## 欢迎参加Daicy 机试\n" +
            " * 请在项目中完成一下需求：\n" +
            "     *  使用`antd`，Table、Input 等组件完成一个表格，渲染`store`中（自己创建对应store）数据，并完成增删改查功能，\n" +
            "                 需要经过以下阶段  `store 创建->定义初始数据->定义action->触发对应需求action->更新store数据-> view显示更新后数据`即可，相关的技术可以进行百度等；\n" +
            "     * main 下创建自己的目录为demo\n" +
            "        * 新增加路由  `demo` component 为demo 下对应的组件；\n" +
            "        * 请区分组件的state 和 全局的store\n" +
            " ```javascript\n" +
            "        如您完成项目请将项目打包发送邮件到： qzcheng@daicy.net\n" +
            "        邮件名称为：xxxx-机试 \n" +
            "        项目压缩时，请勿忽略 node_modules 目录，防止文件过大谢谢\n" +
            " ```"
        return (
            <div style={{
                padding:'10%'
            }} className={"mackdownbox"}>
                <div style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                    <img src={bg} width={240}/>
                </div>
                <Markdown markup={ md } />
            </div>
        )
    }
}
