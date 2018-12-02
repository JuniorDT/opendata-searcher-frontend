import React from 'react';
import {block} from 'bem-cn'
import {Base} from "app/common/Base";
import './style.less';

class Expample extends Base {
    render() {
        return <div className={this.bem.container}>Expample</div>
    }

    initBem() {
        const bem = block('example');
        this.bem = {
            container: bem('container'),
        }
    }
}

export {Expample}