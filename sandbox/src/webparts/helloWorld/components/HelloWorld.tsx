import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, void> {
  public render(): React.ReactElement<IHelloWorldProps> {
    var dataRows; 
    if(this.props.listData) {
      dataRows = this.props.listData.value.map((list) => 
        <li className={styles.listItem}>
          <span className="ms-font-l">{list.Title}</span>
        </li>
        //<li>Hello world</li>
      );
    }

    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p className="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <p className="ms-font-1 ms-fontColor-white">{escape(this.props.test2)}</p>
              <p className="ms-font-1 ms-fontColor-white">Loading from {escape(this.props.context.pageContext.web.title)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <div id="spListContainer">
          <ul className={styles.list}>{dataRows}</ul>
        </div>
      </div>
    );
  }
}
