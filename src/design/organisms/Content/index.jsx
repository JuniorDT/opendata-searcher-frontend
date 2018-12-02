import React from 'react';
import {block} from 'bem-cn'
import {Base} from "app/common/Base";
import {Search} from "design/molecules/Search";
import {InfoDesk} from "design/organisms/InfoDesk";
import './style.less';

class Content extends Base {
    render() {
        return <div className={this.bem.container}>
            <div className={this.bem.searchWrapper}>
                <Search/>
            </div>
            <div className={this.bem.infoDeskWrapper}>
                <InfoDesk/>
            </div>
        </div>
    }

    initBem() {
        const bem = block('content');
        this.bem = {
            container: bem('container'),
            searchWrapper: bem('search-wrapper'),
            infoDeskWrapper: bem('infoDesk-wrapper'),
        }
    }
}

export {Content}