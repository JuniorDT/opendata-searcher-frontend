import React from 'react';
import {block} from 'bem-cn'
import {Base} from "app/common/Base";
import {Input} from 'reactstrap'
import classnames from 'classnames'
import './style.less';

class Search extends Base {
    render() {
        return <div className={this.bem.container}>
            <div className={classnames(this.bem.inputWrapper.toString(), 'col-sm-4')}>
                <Input placeholder="Type here" type="text" onChange={() => console.log('change')}/>
            </div>
        </div>
    }

    initBem() {
        const bem = block('search');
        this.bem = {
            container: bem('container'),
            input: bem('input'),
            inputWrapper: bem('input-wrapper'),
        }
    }
}

export {Search}