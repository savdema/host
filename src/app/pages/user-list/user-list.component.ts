// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { UserService } from '../../services/user.service';

// START - USED SERVICES
/**
* UserService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* UserService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * UserList Component
 */
@Component({
    selector: 'app-user-list',
    templateUrl : './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    constructor(
        private userService: UserService,
        private location: Location
        ) {

    }
}
