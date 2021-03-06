import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatTableModule,
        // MatDialog, MatDialogRef,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatTableModule,
        // MatDialog, MatDialogRef,
    ]
})
export class MaterialModule { }