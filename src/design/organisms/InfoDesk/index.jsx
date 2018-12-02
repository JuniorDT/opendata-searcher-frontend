import React from 'react';
import {block} from 'bem-cn'
import {Base} from "app/common/Base";
import './style.less';

class InfoDesk extends Base {
    render() {
        return <div className={this.bem.container}>
            <div className='container'>
                <div className="row">
                    <div className='col-4'>Hello my brither and miss me</div>
                    <div className='col-4'>Hello my brither and miss me</div>
                    <div className='col-4'>Hello my brither and miss me</div>
                </div>
            </div>
        </div>
    }

    initBem() {
        const bem = block('infoDesk');
        this.bem = {
            container: bem('container'),
        }
    }
}

export {InfoDesk}