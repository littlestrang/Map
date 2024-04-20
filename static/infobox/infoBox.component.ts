import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'info-box',
    template: `
    <div class="tool-{{this.notification.type}}" *ngIf="this.notification.visible" > 
        <i *ngIf="this.notification.type == 'info'" class="fa fa-info icon-info" aria-hidden="true"></i>
        <i *ngIf="this.notification.type == 'error'" class="fa fa-exclamation icon-error" aria-hidden="true"></i>      
            <p class="{{this.notification.type}}">{{this.notification.message}}</p>
        <button *ngIf="this.notification.type == 'error' " class="btn close" (click)="close()">x</button>
    </div>
    `,
    styleUrls: ['infoBox.component.scss'],
})

export class InfoBox {
    
    notification: any = {};
     
    close() {
        this.notification.message = '';
        this.notification.type = '';
    }

    showMessage(type: string, message: string) {  
        
        this.notification = {
            type,
            message,
            visible: true,
        };
        if (type === 'info') {
            setTimeout(() => {
                this.notification.visible = false;
            }, 5000);
        }
    }


}
