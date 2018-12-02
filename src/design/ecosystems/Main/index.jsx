import React from 'react';
import {Header} from "design/organisms/Header";
import {block} from 'bem-cn';
import {Base} from "app/common/Base";
import {Content} from "design/organisms/Content";
import './style.less'

class Main extends Base {
    initBem() {
        const bem = block('main');
        this.bem = {
            container: bem('container'),
            content: bem('content'),
        }
    }
    render() {
        return <div className={this.bem.container}>
            <Header/>
            <div className={this.bem.content}>
                <Content/>
            </div>
        </div>
    }
}

export {Main}