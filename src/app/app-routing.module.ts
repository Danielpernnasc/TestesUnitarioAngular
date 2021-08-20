/**
 * Arquivo principal de rotas e navegação da aplicação.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteRoutes } from './cliente';


import { DemoRoutes } from './demo';

export const routes: Routes = [
  ...ClienteRoutes,
	...DemoRoutes,

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}