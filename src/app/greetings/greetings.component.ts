import { Component, OnDestroy, OnInit } from '@angular/core';
import { LAppDelegate } from '@l2d-setup/lappdelegate';
import * as L2dDefine from '@l2d-setup/lappdefine';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit, OnDestroy {
  showDialogBox = false;
  isModelLoaded = false;

  ngOnInit(): void {
    const lAppDelegate = LAppDelegate.getInstance();
    lAppDelegate.eventListener((event: L2dDefine.L2dEvents) => {
      switch (event) {
        case L2dDefine.L2dEvents.ModelLoaded:
          // lAppDelegate.changeMotion('face_smile_01');
          // lAppDelegate.changeMotion('w-adult-glad01', L2dDefine.PriorityForce);
          setTimeout(() => {
            this.isModelLoaded = true;
            this.showDialogBox = true;
          }, 100);
          break;
          case L2dDefine.L2dEvents.MotionCompleted:
            console.log('Motion Completed');
            break;
        default:
          break;
      }
    });
    if (lAppDelegate.initialize() == false) {
      return;
    }
    lAppDelegate.run();
  }

  ngOnDestroy(): void {
    LAppDelegate.releaseInstance();
  }

}
