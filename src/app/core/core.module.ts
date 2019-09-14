import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule } from 'ngx-socket-io';
import { config } from './configs/socket-io';
import { FilterPipe } from './pipes';

@NgModule({
  declarations: [FilterPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  exports: [
    FilterPipe
  ]
})
export class CoreModule { }
