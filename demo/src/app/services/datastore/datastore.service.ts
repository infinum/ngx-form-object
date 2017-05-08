import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';

// Simple datastore which saves models to localStorage

export class SimpleModel {
  id: string;
}

@Injectable()
export class DatastoreService {
  public save<T extends SimpleModel>(model: T): Observable<T> {
    const modelInstance: string = this.getModelInstanceName(model);
    const savedModels: Array<T> = localStorage.getItem(modelInstance) ? JSON.parse(localStorage.getItem(modelInstance)) : [];

    if (model.id) {
      // Updating a model
      const savedModel: T = savedModels.find((item: T) => item.id === model.id);
      const savedModelIndex: number = savedModels.indexOf(savedModel);
      savedModels[savedModelIndex] = savedModel;
    } else {
      // Creating a new model
      model['id'] = this.generateModelId;
      savedModels.push(model);
    }

    localStorage.setItem(modelInstance, JSON.stringify(savedModels));

    return new BehaviorSubject(model);
  }

  private getModelInstanceName<T>(model: T) {
    return model.constructor.name;
  }

  private get generateModelId(): string {
    return String(Math.round(Math.random() * 100000));
  }
}
