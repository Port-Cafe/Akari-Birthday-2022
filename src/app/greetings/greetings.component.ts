import { Component, OnDestroy, OnInit } from '@angular/core';
import { LAppDelegate } from '@l2d-setup/lappdelegate';
import * as L2dDefine from '@l2d-setup/lappdefine';
import { ActivatedRoute } from '@angular/router';
import { Greetings, IGreetings } from './greetings-dialog/greetings';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit, OnDestroy {
  showDialogBox = false;
  isModelLoaded = false;
  modelLoadedCount = 0;
  greeting: IGreetings;
  constructor(private routh: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.routh.queryParams.subscribe((params: any) => {
      this.greeting = Greetings.getGreeting(params.greetedby);
    });

    const lAppDelegate = LAppDelegate.getInstance();
    lAppDelegate.eventListener((event: L2dDefine.L2dEvents) => {
      switch (event) {
        case L2dDefine.L2dEvents.ModelLoaded:
          if (this.modelLoadedCount == 0) {
            setTimeout(() => {
              this.isModelLoaded = true;
              this.showDialogBox = true;
            }, 200);
          }
          ++this.modelLoadedCount;
          console.log('Model Loaded');
          break;
          case L2dDefine.L2dEvents.MotionCompleted:
            console.log('Motion Completed');
            break;
          case L2dDefine.L2dEvents.ModelReleased:
            this.modelLoadedCount = 0;
            console.log('Model Released');
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
